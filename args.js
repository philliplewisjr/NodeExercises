




let [,, ...args] = process.argv;
//.map loops over the array of arguments
let b = args.map(Number)

//test to see if argument is a number
function mainNumber(value) {
  if(Number.isInteger(value)) {
    return value;
  }
}
//filters out non-numbers
var numbers = b.filter(mainNumber);
//looking in array
console.log(b);
//function to add arguments
let sum = numbers.reduce((a,b)=> a + b, 0)


console.log(sum);

/
