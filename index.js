// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     (function (i) {
//       return function () {
//         console.log(i);
//       };
//     })(i),
//     1000 + i
//   );
// }

let myname = {
  fname: 'Ruchita',
  lname: 'Ghodasara',
};

let printName = function (hometown, state) {
  console.log(
    this.fname + ' ' + this.lname + ' from ' + hometown + ' ' + state
  );
};

printName.call(myname, 'Talala', 'Gujrat');
printName.apply(myname, ['Talala', 'Gujrat']);

var printFullname = printName.bind(myname, 'Talala', 'Gujarat');
console.log(printFullname);
printFullname();

let multiply = function (x, y) {
  console.log(x * y);
};

// let multiplyTwo = function (y) {
//   let x = 2;
//   console.log(x * y);
// };
let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(7);

let obj = {
  name: 'Jack',
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (obj) {
  let func = this;
  return function () {
    func.apply(obj);
  };
};

let newFunc = myFunc.myBind(obj);

newFunc();

const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));
