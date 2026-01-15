
// Slice and Splice

const myArray = [0,1,2,3,4,5]

console.log("A",myArray);

const sliceArray = myArray.slice(1,3); 
console.log("slice array"); // (index 1 to index 3) added into new array

console.log(sliceArray);
console.log(`original array after perform slice: ${[myArray]}`);  // not change in original array

const spliceArray = myArray.splice(1,3);  
console.log("splice array"); // 1to 3 added in new array

console.log(spliceArray);
console.log(`original array after perform splice: ${[myArray]}`);  //  manuplate in original array// change in original artrtay






