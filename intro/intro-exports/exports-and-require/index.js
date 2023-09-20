// CHALLENGE 1
// Vel
const somethingFromFile1 = require('./examples/file-1');
// { tutor: Vel }
const somethingFromFile2 = require('./examples/file-2');
// [Function: printHello]
const somethingFromFile3 = require('./examples/file-3');
// { add: [Function: add] }
const somethingFromFile4 = require('./examples/file-4');
// { printHello: [Function: printHello], add: [Function: add] }
const somethingFromFile5 = require('./examples/file-5');
// {}
const somethingFromFile6 = require('./examples/file-6');

console.log(somethingFromFile1);
console.log(somethingFromFile2)
console.log(somethingFromFile3)
console.log(somethingFromFile4)
console.log(somethingFromFile5)
console.log(somethingFromFile6)

// CHALLENGE 2
// 1.
console.log(somethingFromFile2.tutor)

//2.
console.log(somethingFromFile3())

//3.
console.log(somethingFromFile5.printHello())