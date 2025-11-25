// // variables var, let, const
// // var  (function scopped)
// var x = 0;
// console.log(x);
// var x = 2;
// console.log(x);
// var x = 9;
// console.log(x); // re-declare is possible

// // let (block scopped)

// let y = 1;
// // let y = 2;
// // let y = 3;
// console.log(y); // i can change this value not assign again ( i mean re-declare)

// // const (const )
// const c = "Time";
// // we can re-assign c variable again
// console.log(c);

// ///// Temporal dead zone: JS knows variables exists, but it can't access
// // console.log(a);
// // let a = 7;

// // using var it possible

// console.log(var_);
// var var_ = 7;

// Hoisting impact per type

// var -> hoist -> undefinded
// let -> hoist -> X (reference)
// const -> hoist -> X (reference)

/// Lets pracice some
// console.log(n);
// var n = "Gopal"; //undifined

// console.log(age);
// let age = 25; // reference error

// var x = 1;

// {
//   var x = 2;
// }

// console.log(x);

//
let a = 7;

{
  let a = 9;
  console.log("Inside: ", a);
}

console.log("Outside: ", a);
