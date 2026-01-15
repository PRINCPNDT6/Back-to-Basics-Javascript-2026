// const name = "prince"

// console.log(`hello my name is ${name}`);

const crushName = new String("RIYA-DUBAY")


const newString = crushName.substring(0, 4) // not include last number 
console.log(newString);


const anotherString = crushName.slice(-11, 4)
console.log(anotherString);

let trim = "  prince   " // trim Start and trim End
console.log(trim.trim());

// Replace

const url = "https://prince.com/prince%20sharma"
console.log(url.replace('%20', '_'));

// includes
console.log(url.includes('ince'));


