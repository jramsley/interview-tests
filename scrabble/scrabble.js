#!/usr/bin/env node
'use strict';
const fs = require('fs');
const { findWords, scoreWord, sortWords } = require('./util');

const letters = process.argv[2] && process.argv[2].toLowerCase();
const help = process.argv.includes('--help') || process.argv.includes('-h');

if(help) {
  console.log('print help');
}

if(!letters) {
  throw new Error('No string provided');
}

if(letters.length > 7) {
  throw new Error(`${letters} is longer than 7 characters`);
}

const charsOrUnderscore = /[A-Za-z_]+/g;
if(!charsOrUnderscore.test(letters)) {
  throw new Error("String is not alphabetical('A-Z') or underscore('_')");
}

const wordTree = JSON.parse(fs.readFileSync('word-tree.json', 'utf-8'));
const scoreMap = JSON.parse(fs.readFileSync('score-map.json', 'utf-8'));

const words = findWords({ word: letters, wordTree: wordTree });
const scoredWords = words.map(word => { 
  return { 
    word: word, 
    score: scoreWord({ scoreMap: scoreMap, word: word }) 
  };
});

console.log(sortWords({ words: scoredWords }));
