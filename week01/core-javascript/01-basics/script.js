/*
console.log("7");
console.log("Hello World!");
const x = 7;
console.log("7: ", 7);
console.log(x);
console.error("Alert");
console.error("Alert");
console.warn("Warning");
console.table({
  name: "Gopal",
  language: "Python, JavaScript",
  email: "gopalmahatomain2026@gmail.com",
  city: "Purulia",
});
const styles = "padding: 10px; background-color: white; color: blue";
console.log("%cHello Arch!", styles);
*/

/*
//// variables  and data types
let name = "Gopal";
let age = 19;
let isConsistent = true;

console.log(`name: ${name}, type: ${typeof name}`);
console.log(`age: ${age}, type: ${typeof age}`);
console.log(`isConsistent: ${isConsistent}, type: ${typeof isConsistent}`);
// reference type

const names = ["Gopal", "Manaranjan", "Ujjwal", "Kishan", "Rohit", "Yobraj"];
const objects = {
  name: "Gopal",
  friends: ["Manaranjan", "Ujjwal", "Kishan", "Rohit", "Yobraj"],
};
console.log(`names: ${names}, type: ${typeof names}`);
console.log(`friends: ${objects}, type: ${typeof objects}`);

*/
// values are stored in stack
const name = "Gopal Mahato";
const age = 19;

// reference values are stored in the heap
person = {
  name: "Gopal Mahato",
  age: 19,
};

let newName = name;
newName = "Main";

let newPerson = person;
newPerson.name = "Main";
person.name = newName;

console.log(newName);
console.log(person.name);

let amount = "7";
console.log("7 as string: ", amount);

amount = Number(amount);
console.log("7 as number: ", amount);

amount = amount.toString();
console.log("Back to sting using toSting: ", amount);
