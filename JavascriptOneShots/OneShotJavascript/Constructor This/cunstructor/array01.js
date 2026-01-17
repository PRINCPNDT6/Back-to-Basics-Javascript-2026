// const myArray = [0,1,2,3,4,5]
// const myHeros = ["shaktiman","spiderman"]

// console.log(myArray,myHeros);
// console.log([myArray,myHeros]);

const myArray = [0,1,2,3,4,5]

// Array Method 

myArray.push(6) // add value at end
myArray.pop() // delete value at the end
myArray.pop()
myArray.push(7)

console.log(myArray);

myArray.shift() //delete value at first
myArray.unshift(1) // add value at first

console.log(myArray);

console.log(myArray.includes(8));  // check value yes= true; or no= false;
console.log(myArray.includes(4));  // check value yes= true; or no= false;
console.log(myArray.indexOf(3));
console.log(myArray.indexOf(5));  // i don`t know how does it work?

//  const newArray = [1,1,1,1,1] // not allowed same variable array!
const newArray = myArray.join()
console.log(newArray);
console.log(typeof newArray);





 


