const KEYBOARD_CONFIG = [
  [
    ['Backquote', [['ё', 'Ё'], ['`', '~']], true],
    ['Digit1', [['1', '!'], ['1', '!']], true],
    ['Digit2', [['2', '"'], ['2', '@']], true],
    ['Digit3', [['3', '№'], ['3', '#']], true],
    ['Digit4', [['4', ';'], ['4', '$']], true],
    ['Digit5', [['5', '%'], ['5', '%']], true],
    ['Digit6', [['6', ':'], ['6', '^']], true],
    ['Digit7', [['7', '?'], ['7', '&']], true],
    ['Digit8', [['8', '*'], ['8', '*']], true],
    ['Digit9', [['9', '('], ['9', '(']], true],
    ['Digit0', [['0', ')'], ['0', ')']], true],
    ['Minus', [['-', '_'], ['-', '_']], true],
    ['Equal', [['=', '+'], ['=', '+']], true],
    ['Backslash', [['\\', '/'], ['\\', '|']], true],
    ['Backspace', [['', ''], ['', '']], false, 'backspace'],
  ],
  [
    ['Tab', [['Tab', 'Tab', '\t'], ['Tab', 'Tab', '\t']], true, 'big'],
    ['KeyQ', [['й', 'Й'], ['q', 'Q']], true],
    ['KeyW', [['ц', 'Ц'], ['w', 'W']], true],
    ['KeyE', [['у', 'У'], ['e', 'E']], true],
    ['KeyR', [['к', 'К'], ['r', 'R']], true],
    ['KeyT', [['е', 'Е'], ['t', 'T']], true],
    ['KeyY', [['н', 'Н'], ['y', 'Y']], true],
    ['KeyU', [['г', 'Г'], ['u', 'U']], true],
    ['KeyI', [['ш', 'Ш'], ['i', 'I']], true],
    ['KeyO', [['щ', 'Щ'], ['o', 'O']], true],
    ['KeyP', [['з', 'З'], ['p', 'P']], true],
    ['BracketLeft', [['х', 'Х'], ['[', '{']], true],
    ['BracketRight', [['ъ', 'Ъ'], [']', '}']], true],
    ['Delete', [['Del', 'Del'], ['Del', 'Del']], false, 'big'],
  ],
  [
    ['CapsLock', [['CapsLock', 'CapsLock'], ['CapsLock', 'CapsLock']], false, 'large'],
    ['KeyA', [['ф', 'Ф'], ['a', 'A']], true],
    ['KeyS', [['ы', 'Ы'], ['s', 'S']], true],
    ['KeyD', [['в', 'В'], ['d', 'D']], true],
    ['KeyF', [['а', 'А'], ['f', 'F']], true],
    ['KeyG', [['п', 'П'], ['g', 'G']], true],
    ['KeyH', [['р', 'Р'], ['h', 'H']], true],
    ['KeyJ', [['о', 'О'], ['j', 'J']], true],
    ['KeyK', [['л', 'Л'], ['k', 'K']], true],
    ['KeyL', [['д', 'Д'], ['l', 'L']], true],
    ['Semicolon', [['ж', 'Ж'], [';', ';']], true],
    ['Quote', [['э', 'Э'], ['\'', '"']], true],
    ['Enter', [['Enter', 'Enter', '\n'], ['Enter', 'Enter', '\n']], true, 'large'],
  ],
  [
    ['ShiftLeft', [['Shift', 'Shift'], ['Shift', 'Shift']], false, 'largest'],
    ['KeyZ', [['я', 'Я'], ['z', 'Z']], true],
    ['KeyX', [['ч', 'Ч'], ['x', 'X']], true],
    ['KeyC', [['с', 'С'], ['c', 'C']], true],
    ['KeyV', [['м', 'М'], ['v', 'V']], true],
    ['KeyB', [['и', 'И'], ['b', 'B']], true],
    ['KeyN', [['т', 'Т'], ['n', 'N']], true],
    ['KeyM', [['ь', 'Ь'], ['m', 'M']], true],
    ['Comma', [['б', 'Б'], [',', '<']], true],
    ['Period', [['ю', 'Ю'], ['.', '>']], true],
    ['Slash', [['.', ','], ['/', '?']], true],
    ['ShiftRight', [['Shift', 'Shift'], ['Shift', 'Shift']], false, 'largest'],
  ],
  [
    ['ControlLeft', [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']], false, 'bigger'],
    ['AltLeft', [['Alt', 'Alt'], ['Alt', 'Alt']], false, 'bigger'],
    ['Space', [[' ', ' '], [' ', ' ']], true, 'greater'],
    ['AltRight', [['Alt', 'Alt'], ['Alt', 'Alt']], false, 'bigger'],
    ['ControlRight', [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']], false, 'bigger'],
  ],
];

const LANGUAGES = {
  RU: 0,
  EN: 1,
};

const REGISTER = {
  LOWER: 0,
  UPPER: 1,
};

export {
  KEYBOARD_CONFIG,
  LANGUAGES,
  REGISTER,
};
