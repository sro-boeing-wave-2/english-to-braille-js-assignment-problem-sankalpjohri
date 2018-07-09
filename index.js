/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const englishToBrailleMap = new Map();

englishToBrailleLiteralSet.forEach((element) => {
  englishToBrailleMap.set(element[0], element[1]);
});

function convertEnglishToBraille() {
  const inputText = document.getElementById('sourceLangTextError').value;
  const outputText = [];
  for (let i = 0; i < inputText.length; i += 1) {
    outputText.push(englishToBrailleMap.get(inputText.charAt(i)));
  }
  document.getElementById('targetLangText').innerHTML = outputText.join('');
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertEnglishToBraille);
