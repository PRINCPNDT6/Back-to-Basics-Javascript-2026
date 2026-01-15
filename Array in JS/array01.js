// const myArray = [0,1,2,3,4,5]
// const myHeros = ["shaktiman","spiderman"]

// console.log(myArray,myHeros);
// console.log([myArray,myHeros]);
// pop(end) and shift(start) element delete krte hai or deleted item return krte hai
// push(end) and unshift(start) element add krte hai or new length return krte hai 

// 1 ) push() AND pop()
const myArray = [0,1,2,3,4,2]
console.log(myArray);

// // Array Method 

let deletedItem = myArray.pop() // delete value at end
console.log(myArray);
console.log(`pop(): deleted item is " ${deletedItem}`); //pop() end se value delete  and deleted item  return krta hai
// console.log(`new array length: ${myArray.length}`);


let addItem = myArray.push(5)
console.log(myArray);
console.log(`push(): new array length " ${addItem}`); // push() end me value add and  new length return krta hai



// 2) shift() AND unshift()

let shiftItem = myArray.shift() //delete value at first
console.log(myArray);// change in original aray
console.log(`shift(): kon sa item delete hua:  ${shiftItem}`);
// console.log(`new array length: ${myArray.length}`);

let unshiftItem = myArray.unshift(1) // add value at first
console.log(myArray); // cjange in original array
console.log(`unshift(): new array length: ${unshiftItem}`);




// 3) includes() AND indexof()
// console.log(myArray.includes(8));  // check value yes= true; or no= false;
// console.log(myArray.includes(4));  // check value yes= true; or no= false;
// console.log(myArray.indexOf(3));
// console.log(myArray.indexOf(5));  //  5 kis position/index pr rkha hai

// let newArray = [1,1,1,1,1] // not allowed same name variable array!

// 4) Array convert into String
// .join() and .toString() AND ${arr} also
// let newArray = myArray.join() // array ko string me krna 
// console.log(newArray+20);
// console.log(typeof newArray);
// console.log(myArray); not change original array

// let convertStr = myArray.toString();
// console.log(` convert into string: ${convertStr}`);
// console.log(typeof convertStr);
// console.log(myArray); // not change original array


// 5) add two Array
//  .concat() ye array return krta hai or value ko join krta hai
// let addArr = [1,2,3,4]
// let Array2 = [2,4,]
//  Array2 = Array2.concat(addArr)
//  console.log(Array2);
// let concatArr = Array2.concat(addArr)
// console.log(concatArr);

// console.log(` concate Arr is: ${concatArr}`); // template letral array ko string me krta hai 


// 6) add two array
// spread [...array] ye value ko alg alg krke combine krta hai array me
 // let addArr3 = [1, 2, 3, 4];
// let myArray3 = [2, 4];

// let concatArr1 = [...myArray3, ...addArr3,5,6];
// console.log(concatArr1); // [2, 4, 1, 2, 3, 4,5,6]

// // concatArr1 = [...addArr3,4,5]


 
// let a = [1, 2];
// a = a.concat([3, 4]);
// console.log(a); // [1, 2, 3, 4]

// let b = [1, 2];
// b = [...b, 3, 4];
// console.log(b); // [1, 2, 3, 4]


// revision
//
let arrr = [1,2,3]
arrr = [...arrr,4,5]
arrr = arrr.concat(arrr,2,3)
console.log(arrr);

// let addAr = [...arrr,4,5,6]
// console.log(addAr);
// arrr = arrr.concat([4,5,6])
// console.log(arrr);


