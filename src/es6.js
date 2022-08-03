let a = 10; //global scope

function display() {
  let a = 20; //functional scope
  console.log("inside function", a);
}

if (true) {
  let a = 30; //block scope
}

console.log("outside function", a);
display();

//let will not allow you to redeclare variables
//let has a block scope as well

//es5
// function sum(a, b) {
//   return a + b;
// }

// console.log("sum of : ", sum(2, 3));
// console.log("sum of : ", sum(10, 30));

// // this keyword binding

// //es6
// const display = () => 1 + 2;
// // this keyword is not required

// const a = 10;
// const b = 20;
// const c = 30;

// const user = {
//   name: "vishal",
//   country: "india",
//   age: 31,
// };

// const obj = { a: 10, b: 20, c: 30 };
// const obj1 = { d: 40, e: 50 };

// console.log({ ...obj, ...obj1 });

//template literals

// const instructor = "vishal shetty";
// // const msg = "Welcome to Edureka, Instructor is " + instructor;

// const msg = `Welcome to Edureka, Instructor is ${instructor}`;
// console.log(msg);

//
