# Delayed Words
This project contains a Nodejs program that takes in a list of words to print.  The words should be printed after a specified delay, which is stored with the words.  The data is stored in the file `data.json` in the format:
```javascript
{
  word: //word to print
  time: //time to delay in seconds
}
```
The program should print out each word after the specified delay **relative to the start of the program** along with the item number the word was in the list and how long the delay was.  At the beginning of the program the total number of words will be printed.  At the end of the program, the total execution time of the program will be printed in seconds.

This will program should print in the format
`{# in list} {word} {how long it waited to print since start of run}`

example output:
```
Number of words: 3
1         wash                   waited 0.831 seconds
3         favorite               waited 1.822 seconds
2         cannon                 waited 5.666 seconds
Total time: 8.326 seconds
```

For each task, make a new folder containing the executable program and any submissions along with it.

## Program structure
The program is executed at the top using the `index.js` file.  This will pull in the data from `data.json` and a helper module in `print.js`
```
index.js
    ├── print.js
    └── data.json
```

## Task #1
Run the program as is and write down everything that is working incorrectly in a plain-text file named `issues.txt`

## Task #2
Fix all of the issues found in task #1 and include a sample output in a plain-text file named `sample.out`

## Task #3
Modify the program so that words that start with a capital letter do not wait.  For example, if the data looked like:
```javascript
[
  {
    word: 'Base',
    time: 8.333
  },
  {
    word: 'control',
    time: 1.106
  }
]
```

the expected output would be:
```
Number of words: 2
1         Base                   waited 0.000 seconds
2         control                waited 1.106 seconds
Total time: 1.112 seconds
```

Include a sample output in a plain-text file named `sample.out`
