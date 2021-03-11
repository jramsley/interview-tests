const assert = require('assert').strict;
const { scrabbleWords } = require('../runner');

function noInput () {
  let input;
  expectedOutput = {
    message: 'No string provided'
  };
  assert.throws( () => scrabbleWords(input), expectedOutput);
}

function emptyInput () {
  const input = '';
  expectedOutput = {
    message: 'No string provided'
  };
  assert.throws( () => scrabbleWords(input), expectedOutput);
}

function numeric () {
  const input = '1';
  expectedOutput = {
    message: "String is not alphabetical('A-Z') or underscore('_')"
  };
  assert.throws( scrabbleWords(input), expectedOutput);
}

function tooLong () {
  return { disabled: true };
  const input = 'anything that should is anything that can';
  expectedOutput = {
    message: '???'
  };
  assert.throws( scrabbleWords(input), expectedOutput);
}

module.exports = {
  noInput: noInput,
  emptyInput: emptyInput,
  numeric: numeric,
  tooLong: tooLong 
};
