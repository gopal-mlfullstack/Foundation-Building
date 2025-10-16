function sayHi() {
  return "Hello Arch!";
}

console.log(sayHi());

// parameter and arguments
function registerUser(user = "Gopal") {
  return user + " is registered!";
}

console.log(registerUser("Gopal Mahato"));
console.log(registerUser()); // default parameter

function sum_(...allNumbers) {
  let total = 0;
  for (const num of allNumbers) {
    total += num;
  }
  return total;
}
console.log(sum_(1, 2, 3, 4, 5, 6, 7));

// objects as params
function logUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

console.log(
  logUser({
    id: 1,
    name: "Ujjwal",
  }),
);

console.log(
  logUser({
    id: 2,
    name: "Manaranjan",
  }),
);

console.log(
  logUser({
    id: 3,
    name: "Bimalendu",
  }),
);

// Arrays as param
function getRandomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// scopes

//alert("Hello");
//console.log(innerWidth);

function add() {
  const y = 7; // function scope
  return y;
}
console.log(add());

// block scope
if (true) {
  const x = 7;
  let y = 8;
  var g = 19;
}
console.log(g); // var is Global accessable outside the if block

// Nested scope
function first() {
  const x = 7;
  console.log(x);
  function second() {
    const y = 200;
    console.log(y);
  }
  second();
}
first();

// function declaration

function addDollarSign(value) {
  return "$" + value;
}

console.log(addDollarSign(100000));

const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(7));
