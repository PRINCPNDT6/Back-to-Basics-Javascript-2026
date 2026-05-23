const name = 'prince'
const repocount = 50

// console.log(name + repocount);
console.log(`${name} ${repocount}`);
console.log(`My name is ${name}`);
console.log(`My repocount is ${repocount}`);
// console.log(name.length);


const gameName = new String('Free Fire')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
const capitalName = gameName.toUpperCase()
console.log(capitalName);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('r'));

const anotherString = gameName.slice(1, 3)
console.log(anotherString);
// trim()

const url = 'https://prince.com/prince%20sharma'

console.log(url);

const newUrl = url.replace('%20', '_')
console.log(newUrl);

console.log(url.includes('ince'));

// const cnvrtArray = gameName.split('')
const cnvrtArray = gameName.split(' ')
console.log(cnvrtArray);









