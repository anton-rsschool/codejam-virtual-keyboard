import createElementWithClass from '../utils/utils';
import { LANGUAGES, REGISTER } from '../configs';

export default class Keyboard {
  constructor(config, language) {
    this.config = config;
    this.charMap = this.getCharMap();
    this.keyboard = null;
    this.state = {
      pressedChar: null,
      register: false,
      currentLanguage: language,
      isPressCaps: false,
    };
    this.pressKey = this.pressKey.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  getCharMap() {
    const map = {};
    this.config.forEach((row) => {
      row.forEach((char) => {
        const [code, languages, writable] = char;
        if (writable) {
          const alternativeOutput = languages[LANGUAGES.RU][2];
          if (alternativeOutput) {
            map[code] = [[alternativeOutput, alternativeOutput],
              [alternativeOutput, alternativeOutput]];
          } else {
            map[code] = languages;
          }
        }
      });
    });
    return map;
  }

  updateChar() {
    const { currentLanguage } = this.state;
    const rows = [...this.keyboard.children];
    rows.forEach((row, rowIndex) => {
      const items = [...row.children];
      items.forEach((button, collIndex) => {
        const char = this.config[rowIndex][collIndex];
        const [, languages] = char;
        button.textContent = languages[currentLanguage][this.state.register
          ? REGISTER.UPPER : REGISTER.LOWER];
      });
    });
  }

  static cellKeypressEvent(char) {
    const keyPressEvent = new CustomEvent('keyPress', { detail: char });
    document.dispatchEvent(keyPressEvent);
  }

  addActiveClass(code) {
    const button = this.keyboard.querySelector(`[data-code="${code}"]`);
    if (button) {
      button.classList.add('keyboard__button--active');
    }
  }

  removeActiveClass(code) {
    const button = this.keyboard.querySelector(`[data-code="${code}"]`);
    if (button && button.classList.contains('keyboard__button--active')) {
      button.classList.remove('keyboard__button--active');
    }
  }

  pressKey(code, event) {
    if (code in this.charMap) {
      event.preventDefault();
      const { currentLanguage } = this.state;
      const languages = this.charMap[code];
      const char = languages[currentLanguage][this.state.register
        ? REGISTER.UPPER : REGISTER.LOWER];
      Keyboard.cellKeypressEvent(char);
    }
  }

  toggleCapsLock(code) {
    this.state.isPressCaps = !this.state.isPressCaps;
    this.state.register = this.state.isPressCaps;
    this.updateChar();
    if (this.state.isPressCaps) {
      this.addActiveClass(code);
    } else {
      this.removeActiveClass(code);
    }
  }

  changeLanguage() {
    this.state.currentLanguage = this.state.currentLanguage
      === LANGUAGES.RU ? LANGUAGES.EN : LANGUAGES.RU;
    const keyPressEvent = new CustomEvent('changeLanguage', { detail: this.state.currentLanguage });
    document.dispatchEvent(keyPressEvent);
    this.updateChar();
  }

  clickHandler(event) {
    const element = event.target;
    if (element.nodeName === 'BUTTON') {
      const { code } = element.dataset;
      if (code === 'Backspace') {
        Keyboard.cellKeypressEvent('Backspace');
      } else if (code === 'Delete') {
        Keyboard.cellKeypressEvent('Delete');
      } else if (code === 'CapsLock') {
        this.toggleCapsLock(code);
        return;
      }
      this.pressKey(code, event);
    }
  }

  keyDownHandler(event) {
    const { code } = event;

    if (code === 'AltLeft' && code === 'AltRight') {
      event.preventDefault();
    }

    if (code === 'CapsLock') {
      if (this.state.pressedChar !== code) {
        this.toggleCapsLock(code);
      }
      return;
    }

    const isChangeLanguage = (code === 'ControlLeft' && event.altKey) || (code === 'AltLeft' && event.ctrlKey);
    if (isChangeLanguage) {
      if (this.state.pressedChar !== code) {
        this.changeLanguage();
      }
    }

    const isChangeRegister = code === 'ShiftRight' || code === 'ShiftLeft';
    if (isChangeRegister) {
      if (this.state.pressedChar !== code) {
        this.state.register = !this.state.register;
        this.updateChar();
      }
    }
    this.state.pressedChar = code;
    this.pressKey(code, event);
    this.addActiveClass(code);
  }

  keyUpHandler(event) {
    const { code } = event;
    this.state.pressedChar = null;

    if (code === 'CapsLock') {
      return;
    }

    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
      this.state.register = !this.state.register;
      this.updateChar();
    }
    this.removeActiveClass(code);
  }

  render() {
    this.keyboard = createElementWithClass('div', ['keyboard']);
    const { currentLanguage } = this.state;
    const createButton = (char) => {
      const [code, languages,, size] = char;
      let classList = ['keyboard__button'];
      classList = size ? [...classList, `keyboard__button--${size}`] : classList;
      const keyboardButton = createElementWithClass('button', classList);
      keyboardButton.innerHTML = languages[currentLanguage][this.state.register
        ? REGISTER.UPPER : REGISTER.LOWER];
      keyboardButton.dataset.code = code;
      return keyboardButton;
    };

    this.config.forEach((row) => {
      const keyboardRowElement = createElementWithClass('div', ['keyboard__row']);
      row.forEach((item) => {
        keyboardRowElement.append(createButton(item));
      });
      this.keyboard.append(keyboardRowElement);
    });

    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('keyup', this.keyUpHandler);
    this.keyboard.addEventListener('click', this.clickHandler);
    return this.keyboard;
  }
}
