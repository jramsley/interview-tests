'use strict';
const fs = require('fs');
const { findWords, scoreWord, sortWords } = require('./util');

const wordTree = JSON.parse(fs.readFileSync(__dirname + '/word-tree.json', 'utf-8'));
const scoreMap = JSON.parse(fs.readFileSync(__dirname + '/score-map.json', 'utf-8'));

const charsOrUnderscore = /[A-Za-z_]+/;

function scrabbleWords (letters) {
  if(!letters) {
    throw new Error('No string provided');
  }

  if(letters.length > 7) {
    throw new Error(`${letters} is longer than 7 characters`);
  }

  if(charsOrUnderscore.test(letters) === false) {
    throw new Error("String is not alphabetical('A-Z') or underscore('_')");
  }

  const words = findWords({ word: letters, wordTree: wordTree });
  const scoredWords = words.map(word => {
    return {
      word: word,
      score: scoreWord({ scoreMap: scoreMap, word: word })
    };
  });

  return sortWords({ words: scoredWords });
}

module.exports = {
  scrabbleWords: scrabbleWords
}
