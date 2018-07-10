/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const englishToBrailleMap = new Map(englishToBrailleLiteralSet);

function convertEnglishToBraille() {
  // Get input from the text field.
  const inputText = document.getElementById('sourceLangText').value;
  // Set length of the input text to a variable for optimising the code.

  // Run a loop to go over the input string andd find it's corresponding character in braille.
  const outputText = inputText.split('').map(c => englishToBrailleMap.get(c)).join('');

  // Set the converted text as inner html of the output
  document.getElementById('targetLangText').innerHTML = outputText;
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertEnglishToBraille);
