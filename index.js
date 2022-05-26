let user = 'Mosh'; // using let to declare a variable
console.log(user);

// cannot bea reserverd keyword
// should be meaningful
// cannot start with a number
// cannot contain a space of hyphen, using carmel notation
// are case senstitive

let firstName = 'AA';
let lastName = 'BBB';
let age = 27; // no floating or integer
let isApproved = true;
let future = undefined; // underfined is a type and a value, default value of a variable
let past = null; // to clear the value of a variable, type of this is an object


const interestRate = 0.3;
console.log(interestRate);

// js is dynamic programming, the type of the variable can be changed

// reference types: object, array , function

// object
let person = {
    user: 'AA',
    age: 30
};
// Dot notation
person.user = 'BB';

console.log(person.user);

//Bracket notation, if don't knwo the target property which will be selected by user at run time
let selection = 'user'
person[selection] = 'CC'
console.log(person.user);


// array
// length and the type of elements are dynamic
let selectedColors = ['red', 'blue'];
selectedColors[2]= 30;
console.log(selectedColors);
console.log(selectedColors[0]);

// function
// performaing a task
function greet(name, lastName){ // name is a parameter
    console.log('Hi ' + name + ' ' + lastName);
}// no need ; here

greet('SS', 'CCC'); // 'SS' is the argument

// calculating a value
function square(number){
    return number * number;
}

function add(number, callback){
    return number + callback(number);
}

let n = add(2, square);

console.log(n);

function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (n) {
    return n % 2 != 0;
  });
  
  console.log(oddNumbers);