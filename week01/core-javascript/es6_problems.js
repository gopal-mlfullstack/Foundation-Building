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
*/ 


/*
Problem 5: Block-Scoped Loop Counter
Statement: Use a for loop with let to log numbers 1 to 5, then try accessing the counter outside (should error).
Input Example: No input (just run the loop)
Output Example: 1 2 3 4 5 (then ReferenceError outside)
Problem 6: Array Destructuring with Defaults
Statement: Destructure an array into variables first, second (default to 0 if missing), and rest.
Input Example: const arr = [10];
Output Example: first=10, second=0, rest=[] (log them)
Problem 7: Arrow Function with Rest Params
Statement: Write an arrow function that takes any number of args and returns their product using reduce.
Input Example: product(2, 3, 4)
Output Example: 24
Problem 8: Nested Object Destructuring
Statement: Destructure a nested object to extract 'street' from { address: { street: 'Main', city: 'NY' } }.
Input Example: const location = { address: { street: 'Main', city: 'NY' } };
Output Example: street='Main' (log it)
Problem 9: Convert Traditional to Arrow
Statement: Convert this to arrow: function isEven(n) { return n % 2 === 0; } and use in filter on [1,2,3,4].
Input Example: const nums = [1,2,3,4];
Output Example: [2,4] (after filter)
Problem 10: Combine All: User Profile Function
Statement: Write an arrow function that takes a user object, destructures name and hobbies array, adds a new hobby using mutation (const user), and returns updated user.
Input Example: update({ name: 'Gopal', hobbies: ['reading'] }, 'coding')
Output Example: { name: 'Gopal', hobbies: ['reading', 'coding'] }
*/
