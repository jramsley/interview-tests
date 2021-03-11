'use strict';

function findWords ({ word, wordTree }) {
  const words = [];
  const letters = Object.values(word);

  function search(parentObject, letters) {
    letters.forEach((letter, index) => {
      if(parentObject[letter]) {
        if(parentObject[letter].end) {
          words.push(parentObject[letter].end);
        }

        const remainingLetters = [...letters];
        remainingLetters.splice(index, 1);
        search(parentObject[letter], remainingLetters);
      }
    });
  }

  search(wordTree, letters);
  return [...new Set(words)];
}

function scoreWord ({ scoreMap, word }) {
  let score = 0;
  Object.values(word).forEach(letter => {
    score += scoreMap[letter];
  });
  return score + (word.length === 7 ? 50 : 0);
}

function sortWords ({ words }) {
  return words.sort((a, b) => b.score - a.score);
}

module.exports = {
  findWords: findWords,
  scoreWord: scoreWord,
  sortWords: sortWords
}
