//Blocking example
// const {readFileSync} = require('fs');

// const fileArg = process.argv[2];

// if (fileArg) {
//   try{
//     const data = readFileSync(fileArg, "");
//     console.log("data?", data)
//     process.stdout.write(data)
//   } catch(e) {
//     console.log("Error", e.stack)
//   }
// } else {
//   process.exit()
// }

// console.log("This is the synchronous version")



//non blocking example
const {readFile} = require('fs');

const fileArg = process.argv[2];

if (fileArg) {

  readFile(fileArg, (err, data)=>{
    if(err) return console.error(err) //check for error first in nonblocking method 
      process.stdout.write(data);
  } )

} else {
  process.exit()
}
console.log(readFile)

console.log("This is the asynchronous version")
