console.log("Working With Arrow Function");

// normal function
function getAddtion(num1, num2) {
  return num1 + num2;
}
console.log(getAddtion(7, 7));

// arrow function

const getAdd = (num1, num2) => num1 + num2;
console.log(getAdd(7, 7));

// single params
const getSquare = (x) => x * x;
console.log(getSquare(7));

// returning object

const createObj = () => ({
  name: "Gopal",
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach((n) => console.log(n));
