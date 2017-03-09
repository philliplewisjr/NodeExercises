#!/usr/bin/env node
console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!')

const chalk = require("chalk");
// console.log(chalk);

const {bgBlue, white, bgWhite, bgRed} = require("chalk");

const spacesWhite = "                                                   ";
const spacesRed = "                                                   ";
const stars = "*  *  *  *  *  *  *  ";
const stars1 = "  *  *  *  *  *  *   ";
const spaces2 = "                              ";



for(let i = 0; i < 7; i++ ) {
  if (i < 4) {
    // console.log(chalk.bgBlue.white(stars))
    process.stdout.write(chalk.bgBlue.white(stars) + chalk.bgRed(spaces2) + "\n")
  }
  if (i < 3) {
    // console.log(chalk.bgBlue.white(stars1))
    process.stdout.write(chalk.bgBlue.white(stars1) + chalk.bgWhite(spaces2) + "\n")
  }
}

for(let i = 0; i < 6; i++) {
  if (i < 3) {
  // console.log(chalk.bgRed(spacesRed));
  process.stdout.write(chalk.bgWhite(spacesWhite) + "\n")
}
  if (i < 3) {
    // console.log(chalk.bgWhite(spacesWhite));
    process.stdout.write(chalk.bgRed(spacesRed) + "\n")
  }
}
