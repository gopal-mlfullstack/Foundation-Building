// Variables scope
/*
// With var (function-scoped, leaks out)
if (true){
  var x = 10;
}
console.log(x); // 10 accessible outside 

// With let (block scoped)
if (true){
  let y = 7;
  console.log(y); // In here it will work because let is block scoped (block examples: inside if loops)
}

//console.log(y); // This will give ReferenceError: y is not defined

function info(){
  var name = "Gopal";
}

//console.log(name); //If i use let ReferenceError name is not defined 
*/
//// Reassignment and Constants 
/*
let age = 19;
age = 20;
console.log(age);

const pi = 3.14;
//pi = 3.1416; // it will give me error Assignment to constant variable 
//console.log(pi);

// But const objects can mutate 
const person = {name: "Gopal"};
person.age = 19;
person.city = "Purulia";
person.IsConsistent = true;
console.log(person);
console.log(typeof(person.IsConsistent));
console.log(typeof(person.age));
console.log(typeof(person.city));
console.log(typeof(person));
// If i try to make person object empty it will gives ReferenceError


//person = {};


/// loop with let  (Fixes var closure Issue)
// With var: All print 3 due to shared scope 
for (var i = 0; i < 3; i += 1){
  setTimeout(() => console.log(i), 0);
} // gives 3 3 3 
// with let block-scoped per iteration 
for (let i = 0; i < 3; i += 1){
  setTimeout(() => console.log(i),0);
} // outputs 0 1 2 

/// Example 4 Temporal Dead Zone 
//console.log(a); // gives ReferenceError (Temporal Dead Zone)
//let a = 7;

// vs. var 
console.log(b); // undefined (hoisted) 
var b = 10;
*/


// Arrow functions: Concise Function Syntax () => {}

/*
// Traditional 
function add(a, b){
  return a + b;
}
console.log(add(7, 7)); 
// Arrow (multi-line, explicit return)
const addArrow = (a, b) => {
  return a + b;
}
console.log(addArrow(7, 10));

// Arrow (one line, implicit return)
const multiply = (a, b) => a * b;
console.log(multiply(7, 7));

// Single parameter, no parentheses 
const square = x => x * x;
console.log(square(7));
const cube = x => x * x * x;
console.log(cube(7));
console.log("------------------------------------");

// Example 2: Lexical this (Fixes Callback issues)
const obj = {
  name: "Gopal",
  arrow: function(){
    setTimeout(() => console.log(this.name),0);
  },
  traditional: function(){
    setTimeout( function(){
      console.log(this.name);
    }, 0);
  }
}


obj.arrow();
obj.traditional();

console.log("----------------------------------------")
/// Example 3: With array Methods (e.g., map, filter)
// Before that i need to know about map() and filter function 
// map(): Transforms every element in an array and returns a new array of the same length.
// filter(): Selects certain elements based on a condiion, returning a new array (may be shorter or even empty).

const nums = [1, 2, 3, 4];
// If i want to get each number squared
const square_new = nums.map(x => x * x);
console.log(square_new);
// perplexcity ask me a practice problem: What would be the result if you use .map(x => x + 2) on the same array 
// it will be 3, 4, 5, 6
const add2 = nums.map(x => x + 2);
console.log(add2);

// filting even numbers 
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);

const odds = nums.filter(x => x % 2 !== 0);
console.log(odds);

// perplexcity ask me questions: How can you use filter to get only numbers greater than 2 from this array?: my condition will be x > 2 

const greater2 = nums.filter(x => x > 2);
console.log(greater2);

// mini practice from Chat GPT
// Get names of user older than 20
user_ages = [12, 34, 99, 21]
const older20 = user_ages.filter(x => x > 20);
console.log(older20);
//// Rest Parameters vs. Arguments Objects in  JavaScript
/// Rest Parameters (....)
// Allows a function to accept any number of arguments and packs them into an array.
//Syntax: The rest parameter ...args must be last in the function defination.
//

function sums_(...args){
  // args is a real array!
  return args.reduce((acc, curr) => acc + curr, 0);
}

function factorial_(...args){
  return args.reduce((acc, cur) => acc * cur, 1);
}
console.log(sums_(1, 2, 3, 4));
console.log(sums_(1, 2, 0));
console.log(factorial_(1, 2, 3, 4, 5));
*/

///// 3. Destructing: Unpacking Arrays and Objects 
/// Example 1: Basic array Destructing

const fruits = ["Banana", "Apple", "Cherry", "Mango", "Guava"];
let first = fruits[0];
let second = fruits[1];
console.log(first, second);

// Destructing 
const [f1, f2, f3, f4, f5] = fruits;
console.log(f1, f2, f3, f4, f5);

// skips items
const [,,,, last] = fruits;
console.log(last);

// Rest 
const [head, ...tail] = fruits;
console.log(tail); 

// swaping two numbers 
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

const friends = ["Gopal", "Manaranjan", "Ujjwal", "Div", "Soumen"];
[friends[0], friends[4]] = [friends[4], friends[0]];
console.log(friends);


///Object Destructing lets me easily 


/*
// Example 2: Object Destructing 
const user = {name: "Gopal", age: 19, city: "Purulia"};

// Traditional way to access 
console.log(user.name, user.age, user.city);
*/ 

const person = {
  first_name: "Gopal",
  last_name: "Mahato",
  age: 19,
  job: "Student"
}

const person2 = {
  first_name: "Ulwal",
  last_name: "Das",
  age: 19,

}

const {first_name, last_name, job="Unemployed", age} = person2;
console.log(first_name);
console.log(last_name);
console.log(job);
console.log(age);



















































