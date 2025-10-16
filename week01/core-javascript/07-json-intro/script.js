console.log("I will learn json");
const post = {
  id: 1,
  title: "Post One",
  body: "this is the body",
};

// converting JSON string
const str = JSON.stringify(post);
console.log(str);
// parse JSON
const obj = JSON.parse(str);

const post2 = [
  {
    id: 1,
    title: "Post One",
    body: "this is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "this is the body 2",
  },
];

const str2 = JSON.stringify(post2);
console.log(str2);
