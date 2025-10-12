/*
Problem 1: Simple Variable Swap
Statement: Use destructuring to swap two variables without a temporary variable. Declare them with let.
Input Example: let a = 5; let b = 10;
Output Example: After swap: a = 10, b = 5 (log them)
//CODE:
let a = 5;
let b = 10;

b = a + b;
a = b - a;
b = b - a;

console.log(a, b);
*/
//---------------------------------------------------------


/*
Problem 2: Constant Object Mutation
Statement: Declare a const object for a car with properties like model and year. Mutate it by adding a color property, but don't reassign the object.
Input Example: const car = { model: 'Tesla', year: 2023 };
Output Example: After adding: { model: 'Tesla', year: 2023, color: 'red' } (log the object)

//CODE
const car = {model: "Tesla", year: 2023};

car.color = "Black";
console.log(car);

*/


//-------------------------------------------------------------

/*
Problem 3: Arrow Function for Max Value
Statement: Write an arrow function that takes two numbers and returns the maximum using a one-liner.
Input Example: max(3, 7)
Output Example: 7

//CODE

const max_of_two = (x ,y) => Math.max(x, y);
console.log(max_of_two(1, 7));
*/ 

//--------------------------------------------------------------------
/*
Problem 4: Destructure Function Args
Statement: Write an arrow function that takes an object {x, y} and returns their sum. Use destructuring in params.
Input Example: sum({x: 4, y: 6})
Output Example: 10
 
const sum_ = ({x, y}) => x + y;
console.log(sum_({x: 7, y: 3}));
//👉 Problem:
//Write an arrow function that takes an array [a, b] and returns their product.
const product = ([a, b]) => a * b;
console.log(product([99, 1]));
console.log(product([7, 7]));
//👉 Problem:
//Write an arrow function that takes an object {a, b} and returns their sum, but if b is missing, use b = 5 as a default.
const sum_v2 = ({a, b = 5}) => a + b;
console.log(sum_v2({a: 7}));

//Write an arrow function that takes:
//{ user: { name, age } }
//and returns a string like
//"Gopal is 19 years old."
//Example:
//info({ user: { name: "Gopal", age: 19 } }) // ➡️ "Gopal is 19 years old."
//💡 Hint: Destructure like ({ user: { name, age } }) => ...
const message = ({user: { name, age}}) => name + " is " + age + " years old.";
console.log(message({user: {name: "Gopal", age:19}}));

//🧩 4. Destructuring with Renaming
//👉 Problem:
//Write an arrow function that takes an object {x: width, y: height} and returns width * height.
//Example:
//area({x: 4, y: 6}) // ➡️ 24

const area = ({x: h, y: w}) => h * w;
console.log(area({x: 6, y: 4}));
////////////////////////////////////////////////////////////////////////////////////////////////////
//🧩 5. Mix of Array + Object Destructuring
//👉 Problem:
//Write an arrow function that takes:
//[{x: 2, y: 3}, {x: 4, y: 5}]
//and returns the sum of all x + y values.
//Example:
//sumCoords([{x: 2, y: 3}, {x: 4, y: 5}]) // ➡️ 14
//💡 Hint: You’ll need to destructure both objects from the array — like ([{x: x1, y: y1}, {x: x2, y: y2}]) => 

const sumCoords = ([{x: x1, y: y1}, {x: x2, y: y2}]) => x1+x2+y1+y2;
console.log(sumCoords([{x: 2, y: 3}, {x: 4, y: 5}]));
*/
/*
Problem 5: Block-Scoped Loop Counter
Statement: Use a for loop with let to log numbers 1 to 5, then try accessing the counter outside (should error).
Input Example: No input (just run the loop)
Output Example: 1 2 3 4 5 (then ReferenceError outside)
//CODE 
for (let i = 1; i <= 5; i += 1){
  console.log(i)
}
console.log(i);

*/

/*
Problem 6: Array Destructuring with Defaults
Statement: Destructure an array into variables first, second (default to 0 if missing), and rest.
Input Example: const arr = [10];
Output Example: first=10, second=0, rest=[] (log them)
 

const arr = [10];

const [first, second = 0, ...rest] = arr;

console.log("first: ", first);
console.log("second: ", second);
console.log("rest: ", rest);

*/ 

/*
Problem 7: Arrow Function with Rest Params
Statement: Write an arrow function that takes any number of args and returns their product using reduce.
Input Example: product(2, 3, 4)
Output Example: 24

const product_ = (...args) => args.reduce((acc, cur) => acc * cur, 1);

console.log(product_(1, 3));
*/ 


