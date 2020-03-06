'use strict'

function wait (delay) {
  const currentTime = Date.now();
  const endTime = currentTime + delay;
  while (Date.now() < endTime) {
    //waiting
  }
  return true;
}

function print ({word, delay, index}) {
  const smallSpacer = ' '.repeat(10);
  const largeSpacer = ' '.repeat(25);
  wait(delay);
  const indexString = (index + smallSpacer).substring(0, smallSpacer.length);
  const wordString = (word + largeSpacer).substring(0, largeSpacer.length);
  const timeString = `waited ${delay.toFixed(3)} seconds`;
  console.log(indexString + wordString + timeString);
}

module.exports = {
  print: print
}
