import { KEYBOARD_CONFIG, LANGUAGES } from './configs';
import Keyboard from './components/Keyboard';
import Textarea from './components/Textarea';

let language = LANGUAGES.EN;

const changeLanguageHandler = (event) => {
  const newLanguage = event.detail;
  language = newLanguage;
};

const loadHandler = () => {
  if (localStorage.getItem('currentLanguage')) {
    language = localStorage.getItem('currentLanguage');
  }

  const keyboard = new Keyboard(KEYBOARD_CONFIG, +language).render();
  const textarea = new Textarea().render();
  document.body.prepend(keyboard);
  document.body.prepend(textarea);
};

const unloadHandler = () => {
  localStorage.setItem('currentLanguage', language);
};

document.addEventListener('changeLanguage', changeLanguageHandler);
window.addEventListener('load', loadHandler);
window.addEventListener('unload', unloadHandler);
