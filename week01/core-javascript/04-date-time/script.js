console.log(new Date());
console.log(new Date(2025, 9, 15, 21, 52, 50));
console.log(new Date("2025-10-15T21:56:45"));
console.log(new Date("2025/10/15 21:56:45"));
console.log(Math.floor(Date.now() / 1000 / 3600 / 24 / 365));
// chat gpt gives me more precise
const yearsSince1970 = new Date().getFullYear() - 1970;
console.log(yearsSince1970);

let x;
let d = new Date();

console.log(d.toString());
console.log(d.getMonth());
console.log(d.getFullYear());

console.log(d.getMinutes());
console.log(d.getHours());
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

console.log(Intl.DateTimeFormat("en-IN").format(d));
console.log(Intl.DateTimeFormat("en-GB").format(d));
console.log(Intl.DateTimeFormat("en-US").format(d));

console.log(d.toLocaleDateString("default", { month: "short" }));
console.log(
  d.toLocaleDateString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }),
);
