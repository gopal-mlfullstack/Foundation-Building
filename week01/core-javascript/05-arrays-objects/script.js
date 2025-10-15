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
