//Write a function min(a,b) which returns the least of two numbers a and b.
function get_min(num1, num2){
  if (num1 < num2){
    return num1;
  }
  else {
    return num2;
  }
}

console.log(get_min(2, 5));
console.log(get_min(3, -1));
console.log(get_min(1, 1));
