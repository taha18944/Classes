// var a = " ";

// if (a) {
//   console.log("If Works");
// }

// 0 false
// "" false
// -1 true
// [] true
// {} true
// null false
// undefined false
// true true
// false false

// var b;
// function a() {
//   b = "xyz";
// }
// a();
// console.log(b);

// if (true) {
//   var a = "xyz";
// }

// console.log(a);

// a();
// function a() {
//   console.log("abc");
// }

// var a = [];
// a.abc = "asd"; // wrong
// a[0] = "abc"; // right

// var b = {};
// b[0] = 'xyz' // wrong
// b['pro1'] = 'xyz' // right

// var a = "";
// var check = Array.isArray(a);
// console.log(check);

// function a() {
//   return function () {
//     console.log("function B");
//   };
// }

// a()();

// var a = [];
// a[0] = "asbd";
// console.log(a);

// var b = {};
// b.p1 = "xyz";
// b["p2"] = "jalksjd";
// console.log(b);

// var, let, const

// var
// block scope = false
// re declareable = true
// re assible = true
// hoisting = true

// let
// block scope = true
// redeclareable = false
// re assible = true
// hoisting = false

// const
// block scope = true
// redeclareable = false
// re assible = false
// hoisting = false

// if (true) {
//   var a = "abc";
// }

// if (true) {
//   let a = "xyz";
// }

// if (true) {
//   const a = "xyz";
// }

// var a = 'abc'
// var a = 123

// let a = 'abc'
// let a = 123

// const a = 'abc'
// const a = 123

// var a = 'abc'
// a = 123

// let a = 'abc'
// a = 123

// const a = 'abc'
// a = 123

// hoisting
// function, var

// a()
// function a(){
//     console.log('abc')
// }

// if(true){
//     var a = 'abc'
// }

// function a(){
//     let b = 'abc'
// }

// b = 123
// console.log(b);
// var b = 'abc'

// const a = 'abc'
// a = 'xyz'

// const a = []
// a = [1203]


//~~~~~~~~~~~ Class 2 ~~~~~~~~~~~


let a = ['a','b','c'];
let b = [
  {
    id: 1,
    name: "Muhammad Ali",
    category: "a",
  },
  {
    id: 2,
    name: "Abdul Basit",
    category: "a",
  },
  {
    id: 3,
    name: "Muhammad Ahmed",
    category: "b",
  },
  {
    id: 4,
    name: "Ahmed Ali",
    category: "a",
  },
  {
    id: 5,
    name: "Yaseen Ahmed",
    category: "b",
  },
  {
    id: 6,
    name: "Muhammad Furqan",
    category: "a",
  },
];

// for(var i=0; i<a.length; i++){
//     console.log(a[i])
// }

// a.forEach(function(x){
//   console.log(x)
// })

// let filterItem = a.filter(function(z){
//     if(z < 6){
//         return z
//     }
// })

// console.log(filterItem)

// let filterItem = b.filter(function(x){
//     if(x.category == 'a'){
//         return x
//     }
// })

// console.log(filterItem)

// filter method returns array

// let selectedObj = b.find(function(x){
//     if(x.id == 5){
//         return x
//     }
// })

// find method returns object

// let filterItem = b.filter(function(x){
//     if(x.name.includes('Muhammad')){
//         return x
//     }
// })

// console.log(filterItem)

// let mapItem = b.map(function(x){
//   return x
// })

//=================== Template literals ==========

// let str1 = 10.4123564
// let str2 = 20.456143674561

// let c = `the sum of ${str1} and ${str2} is ${(str1 + str2).toFixed(2)}`

// console.log(c)

//=================== Ternary Operators ==========

// let bool = true

// if(bool){
//   console.log('abc')
//   console.log('abc')
//   console.log('abc')s
// }

// let num = 4

// num == 10 && num == 12?console.log('number equal'):num < 5?console.log('number is too short'):console.log('by default')

// let bool = 10 == 15 ? 'equal Number' : 'Not Equal';

// console.log(bool)

let num1 = 10
let num2 = 10

let bool =  num1-num2 ? 'number Exist' :"number doesn't exist"

console.log(bool)











