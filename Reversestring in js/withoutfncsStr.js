let str = 'hello';
let reverseString = " ";

for(let i = str.length-1; i >= 0; i--){
    reverseString += str[i];

}

console.log(reverseString);

let string = 'prince';

// let rev = string.split('').reverse('').join(' ');
//  console.log(rev); 

//  let spread = [...string].reverse().join(' ');
//  console.log(spread);

// let revStr = Array.from(string).reverse().join();
// console.log(revStr);

 let revStr = function(str){
    let rev  = "";
    for(let i = str.length-1; i >= 0; i--){
        rev += str[i];
    }
    return rev
 }

 console.log( revStr("princeShrma"));
 