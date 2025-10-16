/*
const numbers = [1, 7, 45, 76, 98, 23];
const friends = ["Gopal", "Manaranjan", "Nayan", "Ujjwal", "Yubraj"];
console.log(numbers);
console.log(numbers[0]); // first element
console.log(numbers[-1]); // last element
console.log(
  "Today called me " + friends[2] + " " + new Date(2025, 9, 15, 21, 52, 50),
); //accessing Nayan

numbers.push(77);
numbers.push(88);
numbers.pop();
console.log(numbers);
numbers.unshift(77); // assigned  to 0 index
numbers.shift();
console.log(numbers);
console.log("Reverse Form: ", numbers.reverse());
console.log(numbers.includes(77));
console.log(numbers.includes(0));
console.log("Index of 7: ", numbers.indexOf(7));
console.log(numbers.slice(1));
console.log(numbers);
console.log(numbers.splice(1, 3));
console.log(numbers);
*/
/*
const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];
console.log("fruits: ", fruits);
console.log("berries: ", berries);

//fruits.push(berries);
//console.log(fruits[3][0]); // return strawberry
//c
//concetingfruits
console.log(fruits.concat(berries));
//console.log(fruits + berries);
// spread operator

console.log("Using spread operator: ", ...fruits, ...berries);

// flatten Arrays
const arr = [1, 2, [3, 4, 5, 6, 7], 8, 9];
console.log(arr.flat());

// Static method on array method
console.log(Array.isArray(fruits));
console.log(Array.isArray("Gopal"));
console.log(Array.isArray(["Gopal Mahato", "Ujjwal Das"]));
console.log(Array.from("1234567"));
const a = 1;
const b = 2;
const c = 3;
console.log(Array.of(a, b, c));
*/

/// Challenge 1 from traversy media
// input example: const arr = [1, 2, 3, 4, 5];
// output: [6, 5, 4, 3, 2, 1, 0];

/*
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.push(0);
// or i can use unshift to add 6 at the beginning
console.log([6].concat(arr));

// Chat GPT's optional version
//const arr2 = [1, 2, 3, 4, 5];
//const result = [6, ...arr2.reverse(), 0];
//console.log(result);

/// challenge 2 from Taversy media
// input example: const arr1 = [1, 2, 3, 4, 5]; const arr2 = [5, 6, 7, 8, 9, 10];
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.shift();
console.log(arr1.concat(arr2));

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9, 10];
const result_ = [...array1, ...array2.slice(1)];
console.log(result_);
*/

//// Object Literal: A common data structure that holds key/value pairs
/*
const person = {
  name: "Gopal Mahato",
  age: 19,
  isConsistent: true,
  address: {
    village: "Baragram",
    Distict: "Purulia",
    state: "WestBangal",
  },
  hobbies: ["Watching Football", "Watching Manchester City", "Stay Consistent"],
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isConsistent, typeof person.isConsistent);

console.log(person.address);
console.log(person.hobbies);
console.log(person.hobbies[1], person.hobbies[2]);
person.hasAddition = true;
console.log(person.hasAddition);
console.log(person);

*/
/*
const todo = new Object();
todo.id = 7;
todo.name = "Buy Tadka";
todo.isCompleted = false;
console.log(todo);

const person = {
  address: {
    coords: {
      lat: 23.241092,
      long: 86.635842,
    },
  },
};

console.log("Location(lan): ", person.address.coords.lat);

const obj1 = { a: 1, b: 7 };
const obj2 = { c: 77, d: 0 };
console.log({ obj1, obj2 });
console.log({ ...obj1, ...obj2 });

// Array of objects
const todos = [
  {
    shoping: [
      { id: 1, name: "Buy Atta" },
      { id: 2, name: "Buy Dhal" },
      { id: 3, name: "Buy Rice" },
      { id: 4, name: "Buy Potatos" },
      { id: 5, name: "Buy eggs" },
      { id: 6, name: "Buy Collage" },
    ],
    work: [
      { id: 1, name: "JavaScript and TypeScript Mastery" },
      {
        id: 2,
        name: "Data Structure and Algorithm in python (first week solve atlest 30 problems)",
      },
      {
        id: 3,
        name: "Work on Communation 30 minutes daily use as breaks for prime tasks",
      },
    ],
  },
];
console.log(todos);
console.log(todos[0].shoping[0].name);
console.log(todos[0].work[1].name);


