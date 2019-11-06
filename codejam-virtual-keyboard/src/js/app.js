import { KEYBOARD_CONFIG } from './configs';
import Keyboard from './components/Keyboard';

let language = 1;

const changeLanguageHandler = (event) => {
  const newLanguage = event.detail;
  language = newLanguage;
};

const loadHandler = () => {
  if (localStorage.getItem('currentLanguage')) {
    language = localStorage.getItem('currentLanguage');
  }

  const keyboard = new Keyboard(KEYBOARD_CONFIG, language).render();
  document.body.append(keyboard);
};

const unloadHandler = () => {
  localStorage.setItem('currentLanguage', language);
};

document.addEventListener('changeLanguage', changeLanguageHandler);
window.addEventListener('load', loadHandler);
window.addEventListener('unload', unloadHandler);
