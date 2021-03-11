const { positive, negative } = require('./tests');

for (const [ testName, testFunction ] of Object.entries(positive)) {
  try {
    const output = testFunction();
    if ( output && output.disabled ) {
      console.log(`\x1b[2m- disabled\x1b[0m ${testName}`);
    } else {
      console.log(`\x1b[32m\u2705 passed\x1b[0m ${testName}`);
    }
  } catch (e) {
    console.log(`\x1b[31m\u274C failed\x1b[0m ${testName}`);
    console.log(e);
  }
}

for (const [ testName, testFunction ] of Object.entries(negative)) {
  try {
    const output = testFunction();
    if ( output && output.disabled ) {
      console.log(`\x1b[2m- disabled\x1b[0m ${testName}`);
    } else {
      console.log(`\x1b[32m\u2705 passed\x1b[0m ${testName} passed`);
    }
  } catch (e) {
    console.log(`\x1b[31m\u274C failed\x1b[0m ${testName}`);
    console.log(e);
  }
}
