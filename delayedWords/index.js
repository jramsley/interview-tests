const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const print = require('./print').print;

const startTime = new Date();
console.log(`Number of words: ${data.length}`);
data.forEach((value, index) => {
  print({
    index: index,
    word: value.word,
    delay: value.time
  });
});
const endTime = new Date();
console.log(`Total time: ${endTime - startTime}`);
