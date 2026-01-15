const users = [
  { name: "Ravi", active: true },
  { name: "Aman", active: false },
  { name: "Simran", active: true },
  { name: "Rohit", active: false },
];

// only active user details

const ActiveUsers = 
users.filter( (data) =>   (data.active != true)
);

console.log(ActiveUsers);



const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];
//  Sirf 10,000 se kam price wale products filter karo

const filterProducts = products.filter( (product) => {
   return product.price < 10000
})

console.log(filterProducts);



const words = ["apple", "banana","pineApple", "kiwi", "mango", "grape"];
// Sirf 5 ya usse kam letters wale words filter karo

const filterWords = words.filter((fruit) =>(fruit.length <= 5))

console.log(filterWords);



const scores = [null, 0, 45, "", 89, undefined, 32, false];
//  Sirf valid (truthy) values filter karo 
const truthyVal = scores.filter( (val) => (val))

//  Sirf Unvalid (Falsy) values filter karo 
const Falsy = scores.filter( (val) => (!val))
console.log(Falsy);
