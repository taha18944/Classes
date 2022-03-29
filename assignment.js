// function PassbyReference(obj) {
//   let tmp = obj.a;
//   obj.a = obj.b;
//   obj.b = tmp;
//   console.log(`Inside Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
// }
// let obj = {
//   a: 10,
//   b: 20

// }
// console.log(`Before calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
// PassbyReference(obj)
// console.log(`After calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);

let object1 = {
  a: 'taha',
  b: 42,
  c: false
};

console.log(Object.values(object1));
console.log(Object.keys(object1));