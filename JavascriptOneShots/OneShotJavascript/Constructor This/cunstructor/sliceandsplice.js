
// Slice and Splice

const myArray = [0,1,2,3,4,5]

console.log("A",myArray);

const newArray = myArray.slice(1,3); // 1 to below of 3 added into new array
console.log("slice array");

console.log(newArray);
console.log(`original array after perform slice: ${[myArray]}`);  // not change in original artrtay

const newArray2 = myArray.splice(1,3); // 1to 3 added in new array 
console.log("splice array");

console.log(newArray2);
console.log(`original array after perform splice: ${[myArray]}`);  //  manuplate in original array// change in original artrtay






