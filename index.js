/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const englishToBrailleMap = new Map();

// Convert binding set to map.
englishToBrailleLiteralSet.forEach((element) => {
  englishToBrailleMap.set(element[0], element[1]);
});

function convertEnglishToBraille() {
  // Get input from the text field.
  const inputText = document.getElementById('sourceLangText').value;
  const outputText = [];
  // Set length of the input text to a variable for optimising the code.
  const len = inputText.length;
  // Run a loop to go over the input string andd find it's corresponding character in braille.
  for (let i = 0; i < len; i += 1) {
    outputText.push(englishToBrailleMap.get(inputText.charAt(i)));
  }
  // Set the converted text as inner html of the output element.
  document.getElementById('targetLangText').innerHTML = outputText.join('');
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertEnglishToBraille);
