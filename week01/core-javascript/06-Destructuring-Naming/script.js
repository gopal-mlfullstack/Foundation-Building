console.log("Object Destructuring and Naming!");
const firstName = "Gopal";
const lastName = "Mahato";
const age = 19;

const person = {
  //firstName: firstName,
  //lastName: lastName,
  //age: age, Instead of like this i can do like below
  firstName,
  lastName,
  age,
};
console.log(person.firstName, person.lastName, person.age);

// Destructuring

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Gopal",
    role: "Junior Engineer",
  },
};

const { id: todoId, title, user } = todo;
const { name } = user;

console.log(todoId, title, user);

// destructure arrays
const numbers = [23, 4, 7, 5, 4, 3, 2];

const [n1, n2, ...rest_numbers] = numbers;
console.log(n1, n2, rest_numbers);
