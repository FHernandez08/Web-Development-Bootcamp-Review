import { argv } from 'node:process';

// process.argv.slice[2] = gives the defined arguments ONLY
const [name, number, animal, verb] = process.argv.slice(2);

console.log(`${name} was taking a nice stroll
along the river when suddenly ${number} ${animal}s appeared
and began to ${verb}!`)

// arguments used can be created to do something within the code --> todo list app