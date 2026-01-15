const str = "the quick brown fox jumps over the lazy dog"

const words = str.split(' ')
// console.log(words[3]); // fox
// console.log(words); // array 

// console.log(str.split(' ')); // same as array , it works like seprator 



// const chars = str.split(' ')
// console.log(chars[4]); // jumps after 4 spaces cause of (' ')

const chars = str.split('')
console.log(chars[4]); // q after 4 character
console.log(str.split('')); // same as array , it works like seprator 

const strCopy = str.split()
// console.log(strCopy);



