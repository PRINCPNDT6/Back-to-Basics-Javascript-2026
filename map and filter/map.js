//    map() — Jab data badalna (transform karna) ho

// map() ka use array ke har element ko modify / transform karne ke liye hota hai.
// Ye same length ka naya array return karta hai.

const numbers = [1, 2, 3, 4];

// Har element ko double karna hai
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// Use map() when:

// Tumhe har element me change karna hai

// Output array same length ka chahiye

// Jaise: convert numbers → double, names → uppercase, objects → extract properties, etc.