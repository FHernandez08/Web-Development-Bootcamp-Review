const readline = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("What's your name? ", (response) => {
    console.log(`Welcome ${response}! We are learning how to use readline.`)
    rl.close();
})