// PROBLEM 1:

const names = ["ravi", "aman", "simran", "rohit"];
//  naam ka pehla letter capital karo
// Output: ["Ravi", "Aman", "Simran", "Rohit"]

const newNames = names.map((value) => 
  value.charAt(0).toUpperCase() + value.slice(1)
);
console.log(newNames);


// PROBLEM 1:
const prices = [100, 200, 300, 400];
// Har price me 10% tax add karo
// Output: [110, 220, 330, 440]
const taxPrice = prices.map(( num) => num + num*10/100);

console.log(taxPrice);

