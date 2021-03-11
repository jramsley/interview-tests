const assert = require('assert').strict;
const { scrabbleWords } = require('../runner');

function singleLetter () {
  const input = 'a';
  const expectedOutput = [ { word: 'a', score: 1 } ];
  const output = scrabbleWords(input);
  assert.deepStrictEqual(expectedOutput, output);
}

function fiveChars () {
  const input = 'aaadb';
  const expectedOutput = [
    { word: 'dab', score: 6 },
    { word: 'bad', score: 6 },
    { word: 'aba', score: 5 },
    { word: 'baa', score: 5 },
    { word: 'ada', score: 4 },
    { word: 'ab', score: 4 },
    { word: 'ba', score: 4 },
    { word: 'ad', score: 3 },
    { word: 'da', score: 3 },
    { word: 'b', score: 3 },
    { word: 'aa', score: 2 },
    { word: 'd', score: 2 },
    { word: 'a', score: 1 }
  ];
  const output = scrabbleWords(input);
  assert.deepStrictEqual(expectedOutput, output);
}

function fiveCharsReverse () {
  const input = 'bdaaa';
  const expectedOutput = [
    { word: 'bad', score: 6 },
    { word: 'dab', score: 6 },
    { word: 'baa', score: 5 },
    { word: 'aba', score: 5 },
    { word: 'ba', score: 4 },
    { word: 'ab', score: 4 },
    { word: 'ada', score: 4 },
    { word: 'b', score: 3 },
    { word: 'da', score: 3 },
    { word: 'ad', score: 3 },
    { word: 'd', score: 2 },
    { word: 'aa', score: 2 },
    { word: 'a', score: 1 }
  ];
  const output = scrabbleWords(input);
  assert.deepStrictEqual(expectedOutput, output);
}

function sevenChars () {
  const input = 'aacdoov';
  const expectedOutput = [
    { word: 'avocado', score: 63 },
    { word: 'covado', score: 12 },
    { word: 'vacoa', score: 10 },
    { word: 'cava', score: 9 },
    { word: 'coda', score: 7 },
    { word: 'codo', score: 7 },
    { word: 'vod', score: 7 },
    { word: 'ava', score: 6 },
    { word: 'avo', score: 6 },
    { word: 'cad', score: 6 },
    { word: 'cod', score: 6 },
    { word: 'doc', score: 6 },
    { word: 'ova', score: 6 },
    { word: 'coo', score: 5 },
    { word: 'ada', score: 4 },
    { word: 'ado', score: 4 },
    { word: 'ca', score: 4 },
    { word: 'dao', score: 4 },
    { word: 'oda', score: 4 },
    { word: 'v', score: 4 },
    { word: 'ad', score: 3 },
    { word: 'c', score: 3 },
    { word: 'da', score: 3 },
    { word: 'do', score: 3 },
    { word: 'od', score: 3 },
    { word: 'aa', score: 2 },
    { word: 'ao', score: 2 },
    { word: 'd', score: 2 },
    { word: 'a', score: 1 },
    { word: 'o', score: 1 }
  ];
  const output = scrabbleWords(input);
  assert.deepStrictEqual(expectedOutput, output);
}

function sevenCharsReverse () {
  const input = 'voodcaa';
  const expectedOutput = [
    { word: 'avocado', score: 63 },
    { word: 'covado', score: 12 },
    { word: 'vacoa', score: 10 },
    { word: 'cava', score: 9 },
    { word: 'vod', score: 7 },
    { word: 'codo', score: 7 },
    { word: 'coda', score: 7 },
    { word: 'ova', score: 6 },
    { word: 'doc', score: 6 },
    { word: 'cod', score: 6 },
    { word: 'cad', score: 6 },
    { word: 'avo', score: 6 },
    { word: 'ava', score: 6 },
    { word: 'coo', score: 5 },
    { word: 'v', score: 4 },
    { word: 'oda', score: 4 },
    { word: 'dao', score: 4 },
    { word: 'ca', score: 4 },
    { word: 'ado', score: 4 },
    { word: 'ada', score: 4 },
    { word: 'od', score: 3 },
    { word: 'do', score: 3 },
    { word: 'da', score: 3 },
    { word: 'c', score: 3 },
    { word: 'ad', score: 3 },
    { word: 'd', score: 2 },
    { word: 'ao', score: 2 },
    { word: 'aa', score: 2 },
    { word: 'o', score: 1 },
    { word: 'a', score: 1 }
  ];
  const output = scrabbleWords(input);
  assert.deepStrictEqual(expectedOutput, output);
}

function oneBlank () {
  return { disabled: true };
}

function twoBlanks () {
  return { disabled: true };
}

module.exports = {
  singleLetter: singleLetter,
  fiveChars: fiveChars,
  fiveCharsReverse: fiveCharsReverse,
  sevenChars: sevenChars,
  sevenCharsReverse: sevenCharsReverse,
  oneBlank: oneBlank,
  twoBlanks: twoBlanks
};
