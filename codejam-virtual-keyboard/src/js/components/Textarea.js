import createElementWithClass from '../utils/utils';

export default class Textarea {
  constructor() {
    this.textarea = null;
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  printChar(string, selectionStart, selectionEnd, char) {
    const newString = `${string.substr(0, selectionStart)}${char}${string.substr(selectionEnd)}`;
    this.textarea.value = newString;
    this.textarea.selectionEnd = selectionStart + 1;
  }

  deleteChar(string, selectionStart, selectionEnd) {
    if (selectionStart === selectionEnd) {
      const newString = `${string.substr(0, selectionStart)}${string.substr(selectionEnd + 1)}`;
      this.textarea.value = newString;
      this.textarea.selectionEnd = selectionEnd;
    } else {
      const newString = `${string.substr(0, selectionStart)}${string.substr(selectionEnd)}`;
      this.textarea.value = newString;
      this.textarea.selectionStart = selectionStart;
      this.textarea.selectionEnd = selectionStart;
    }
  }

  backspace(string, selectionStart, selectionEnd) {
    if (selectionStart === selectionEnd) {
      if (selectionStart === 0) {
        return;
      }
      const newString = `${string.substr(0, selectionStart - 1)}${string.substr(selectionEnd)}`;
      this.textarea.value = newString;
      this.textarea.selectionEnd = selectionStart - 1;
    } else {
      const newString = `${string.substr(0, selectionStart)}${string.substr(selectionEnd)}`;
      this.textarea.value = newString;
      this.textarea.selectionEnd = selectionStart;
    }
  }

  keyPressHandler(event) {
    const { selectionStart, selectionEnd } = this.textarea;
    const string = this.textarea.value;
    const pressedChar = event.detail;

    if (pressedChar === 'Backspace') {
      this.backspace(string, selectionStart, selectionEnd);
    } else if (pressedChar === 'Delete') {
      this.deleteChar(string, selectionStart, selectionEnd);
    } else {
      this.printChar(string, selectionStart, selectionEnd, pressedChar);
    }
    this.textarea.focus();
  }

  render() {
    this.textarea = createElementWithClass('textarea', ['textarea']);
    document.addEventListener('keyPress', this.keyPressHandler);
    return this.textarea;
  }
}
