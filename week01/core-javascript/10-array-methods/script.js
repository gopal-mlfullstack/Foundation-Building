console.log("I am working with some used methods in JavaScript");
/*
const socials = ["X", "Linkedln", "Facebook", "Instragram"];

socials.forEach((item) => console.log(item));

const socialObject = [
  { name: "X", url: "https://x.com" },
  { name: "Linkedin", url: "https://www.linkedin.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Instragram", url: "https://www.instragram.com" },
];

socialObject.forEach((name) =>
  console.log(`Name: ${name.name} URL: ${name.url}`),
);

console.log("------------------------------" * 0.5);

// Filter method
//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((x) => x % 2 === 0);
const oddNumbers = numbers.filter((x) => x % 2 !== 0);
console.log(oddNumbers);
console.log(evenNumbers);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const retails = companies.filter((retails) => retails.category === "Retail");
console.log("Retails: ", retails);

//Get companies that started in or after 1980 and ended in or before 2005
const companyFilter = companies.filter(
  (coms) => coms.start >= 1980 && coms.end <= 2005,
);
console.log("Started After 1980 and Ended before 2005: ", companyFilter);

// Get companies that lasted 10 years or more

const filterOver10 = companies.filter((coms) => coms.end - coms.start >= 10);

console.log("Over 10 years Companies: ", filterOver10);
*/

//// map()
/*
const numbers = [1, 7, 8, 9];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const getCompanyName = companies.map((company) => company.name);
console.log("Company Names: ", getCompanyName);

// Create an company just an name and catagory
const getNameCatagory = companies.map(
  (company) => `Company Name: ${company.name} | Category: ${company.category}`,
);
console.log(getNameCatagory);

// Creating an array of objects with the name and the length of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    years: company.end - company.start,
  };
});
console.log(companyYears);
*/

// reduce()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
