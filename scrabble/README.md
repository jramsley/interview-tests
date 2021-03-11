# Scrabble Words
This project contains a [Nodejs](https://nodejs.org/) program that takes in a list of characters and finds possible scrabble words.  The program can be run either through commandline or can be used a module.  The words are pre-generated using `generateTree.js` which parses the dictionary provided with OSX located at `/usr/share/dict/words`.  An already compiled tree is located at `word-tree.json`;

The entry point for the command line version is `scrabble.js` and takes a commandline argument of a string of characters to find words from
ex.
```javascript
% node scrabble.js aab
[
  { word: 'aba', score: 5 },
  { word: 'baa', score: 5 },
  { word: 'ab', score: 4 },
  { word: 'ba', score: 4 },
  { word: 'b', score: 3 },
  { word: 'aa', score: 2 },
  { word: 'a', score: 1 }
]
```

The program should print out each possible word and then sort them by score.

Blanks are represented by `_`

## Word Tree
The word tree is a JSON object with each potential node on a tree being a key.  At each potential termination of a branch, an 'end' key is there with the full word as the value.  Ex. for the input 'quick', the tree would look like:
```
{
  "q": {
    "u": {
      "i": {
        "c": {
          "k": {
            "end": "quick",
            "e": {
              "n": {
                "end": "quicken"
              }
            },
            "i": {
              "e": {
                "end": "quickie"
              }
            },
            "l": {
              "y": {
                "end": "quickly"
              }
            }
          }
        }
      }
    }
  }
}
```

The potential words to be found are `quick`, `quicken`, `quickie`, and `quickly` from this point.  Since no additional letters are provided, the tree cannot be walked further to get anything except for `quick`.

The word tree walking is done in the `findWords` function in `util.js`

## Testing
Tests for this module are located in the `test/` folder and are executed with the `run.js` file
```
test/
    ├── negative.js
    ├── positive.js
    ├── run.js
    └── tests.js
```

Positive test cases are written in `positive.js` and negative test cases are written in `negative.js`.  All tests are then collated in `tests.js` which is used to seed the data in `run.js`

Tests can have three possible results:
```
✅ passed singleLetter
- disabled oneBlank
❌ failed numeric
Error: String is not alphabetical('A-Z') or underscore('_')
    at scrabbleWords (/Users/jramsley/interview-tests/scrabble/runner.js:20:11)
    at numeric (/Users/jramsley/interview-tests/scrabble/test/negative.js:25:18)
    at Object.<anonymous> (/Users/jramsley/interview-tests/scrabble/test/run.js:19:20)
    at Module._compile (internal/modules/cjs/loader.js:1085:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:791:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

Passed tests are prepended with `✅ passed` and are green
Disbaled tests are prepended with `- disabled` and are dim
Failed tests are prepended with `❌ failed` are red and include the corresponding failure.

Failures are in the form of thrown Exceptions

If a test returns an object `{ disabled: true}` then the test will be skipped

## Scrabble
Scrabble is a game where players are given 7 characters to combine and make words.  Each letter is assigned a point and are summed up to give the points of the word provided.  If all seven letters are used, a bonus of 50 points is given for the word score.

The score values for each character are:
```
{
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 3,
  "m": 3,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10,
  "_": 0
}
```

`_` (Blank) tiles are wildcard characters and can be used a substitution for any other letter.  For example, if a player has `bc_` they can make the word `cab` by placing the characters as `c_b` and using the `_` as an `a`.  The `_` characters are worth zero points.  

There are also a finite number of tiles provided in the game.  The number of tiles for each letter is:
```
{
  "a": 9,
  "b": 2,
  "c": 2,
  "d": 4,
  "e": 12,
  "f": 2,
  "g": 3,
  "h": 2,
  "i": 9,
  "j": 1,
  "k": 1,
  "l": 4,
  "m": 2,
  "n": 6,
  "o": 8,
  "p": 2,
  "q": 1,
  "r": 6,
  "s": 4,
  "t": 6,
  "u": 4,
  "v": 2,
  "w": 2,
  "x": 1,
  "y": 2,
  "z": 1
}
```

## Task #1
Run the program as is and write down everything that is working incorrectly in a plain-text file named `issues.txt`

example output:
> • Unreachable words are able to be matched, (ex. Entering `sand` will return `sass`)
>
> • Blanks are not scored properly 
>

## Task #2
The program as written doesn't handle the tile count limit.  Modify the program so that it is able to handle and properly reject improper inputs.

## Task #3
The program as written doesn't handle blank tiles properly.  Modify the program so that blanks are handled properly.

## Task #4
Fix all of the tests after modifications from Task #2 and Task #3.

## Task #5
Add any additional test cases that are currently being missed.

## Optional
Review the code provided and find any errors or inconsistencies in it
