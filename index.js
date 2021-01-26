const USER = {
  name: "John Doe",
  age: 32
};

const USER2 = {
  name:"Frank Castle",
  age:42
};

const NESTED_USER = {
  judelaw: {
    age:54,
    email:"judelaw@email.com"
  }
};

//ES5 Assignment
//const name = USER.name;
//const age = USER.age;

//ES6 Descructuring
//const {name, age} = USER2

//New variable names
//ES5
//const userName = USER.name;
//const userAge = USER.age;

//ES6
//const {name:userName, age:userAge} = USER2;

//ES6 Nested
const {judelaw: {age, email}} = NESTED_USER;

//ES6 Nested reassignment
const {judelaw: {age:userAge, email:userEmail}} = NESTED_USER;

//console.log(name);
console.log(age);
console.log(email);
//console.log(userName);
console.log(userAge);
console.log(userEmail);


//const [a, b] = [1, 2, 3, 4, 5, 6];
//console.log(a, b); // 1, 2
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let x = 1, y = 2;
console.log(x);
console.log(y);

[x, y] = [y, x];

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a,b,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

//destructuring in a function
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;