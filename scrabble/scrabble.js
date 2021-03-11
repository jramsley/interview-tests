#!/usr/bin/env node
'use strict';
const fs = require('fs');
const { scrabbleWords } = require('./runner');

const letters = process.argv[2] && process.argv[2].toLowerCase();
const help = process.argv.includes('--help') || process.argv.includes('-h');

if(help) {
  console.log('print help');
}

console.log(scrabbleWords(letters));
