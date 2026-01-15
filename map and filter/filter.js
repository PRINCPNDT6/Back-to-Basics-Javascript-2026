//  filter() — Jab data chhantna (remove/select) ho

// filter() ka use un elements ko rakhne ke liye hota hai
// jo ek condition pass karte hain.

const numbers = [1, 2, 3, 4, 5, 6];

// Sirf even numbers chahiye
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]

//   Use filter() when:

// Tumhe sirf kuch specific elements rakhne hain

// Output array chhoti ho sakti hai

// Jaise: age > 18 wale users, marks >= 40 wale students, etc.