const users = [
  { name: "Ravi", active: true },
  { name: "Aman", active: false },
  { name: "Simran", active: true },
  { name: "Rohit", active: false },
];
//  Sirf active users ka array banao
const activeUsers = users.filter((data) => data.active === true)
console.log(activeUsers);


const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];
//  Sirf 10,000 se kam price wale products filter karo

const filterPrice = products.filter((product) => product.price < 10000)
console.log(filterPrice);


 

const words = ["apple", "banana", "kiwi", "mango", "grape"];
// Sirf 5 ya usse kam letters wale words filter karo

const filterWords = words.filter((word) => word.length <= 5);
console.log(filterWords);


const scores = [null, 0, 45, "", 89, undefined, 32, false];
//  Sirf valid (truthy) values filter karo


// scores.filter(truthyVal => Boolean(truthyVal))
const truthyValue = scores.filter((truthyVal) =>  truthyVal);
console.log(truthyValue);

