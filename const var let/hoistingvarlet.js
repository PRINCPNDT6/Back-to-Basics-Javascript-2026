// console.log(a);
// var a = 10;


// // {} is for creating a block scope , 
// // cause a has been already declare 
// {let a  =  10;
// console.log(a);}

// let x = 5;

// {
//     console.log(x); // Cannot access 'x' before initialization
//     let x = 10;
// }

var z;
console.log(z);

// “let aur const block scoped hote hain. TDZ ke karan, inhe declaration se pehle access karne par ReferenceError aata hai.

{let x = 10 ;}
console.log(x);
