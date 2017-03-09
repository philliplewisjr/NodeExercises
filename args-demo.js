#!/usr/bin/env node

//pulls in a third party module
const {words} = require('superb');
// const {uniqueRandomArray} = require('superb')
//console.log(words);


// const = args = process.argv.slice(2)
// const = args = 

let [,, ...args] = process.argv;

console.log(args);

//stdout only works with strings and buffers must make it a string
process.stdout.write(`${args.toString()}\n`) //this happens in the background of console.log considered abstraction
