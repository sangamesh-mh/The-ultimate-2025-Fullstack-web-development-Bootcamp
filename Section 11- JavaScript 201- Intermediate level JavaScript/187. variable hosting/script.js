console.log('first', name2);
var name2 = 'sangamesh';
console.log('second', name2);

// incase of let and const

console.log(hoistedLet);
let hoistedLet = 'this variable is hoisted';
console.log(hoistedLet);

// incase of functions

hoistedFunction();

function hoistedFunction() {
  console.log('this function is hoisted');
}
