//  var 

// this is old js keyword which can be re-declared 
// it's use out of scope, so we avoid var due to scope and hoisting issues
// var is function scoped 
if (true) {
    var x = 10;
}

console.log(x); // 10

// let is block scope 
if (true) {
    let y = 20;
}

// console.log(y); // y is not defined

// var ignores block scope  in loops
for (var i = 0; i < 3; i++) {
    // loop
}

console.log(i);  // this will be print last iteration value 

// Let
for (let j = 0; j < 3; j++) {
    // loop
}

console.log(j); // error not print out of block

// var is function scoped
function test() {
    var a = 100;
    if (true) {
        var a = 200; // SAME variable
    }
    console.log(a); // 200
}

test();

// this is ignored a = 100 and create a new a = 200 
// cause of overridding of a = 100


// let is block scoped 
function test() {
    var l = 100;
    if (true) {
        var l = 200; // SAME variable
    }
    console.log(l); // 100
}

test();


var x = 5;
var x = 10;

console.log(x); // 10

let y =5;
let y =10;

console.log(y); // y has been  already declared





