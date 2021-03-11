const fs = require('fs');
const data = fs.readFileSync('/usr/share/dict/words', 'utf-8').split('\n').filter(word => word.length && word.length <= 7).map(word => word.toLowerCase());

const words = Array.from(new Set(data));
const dict = {};

words.forEach(word => {
  let parentObject = dict;
  Object.values(word).forEach((character, index) => {
    if(!parentObject[character]) {
      parentObject[character] = {};
    };

    if((index + 1) === word.length) {
      parentObject[character].end = word;
    }

    parentObject = parentObject[character];
  });
});

fs.writeFileSync('word-tree.json', Buffer.from(JSON.stringify(dict)));
