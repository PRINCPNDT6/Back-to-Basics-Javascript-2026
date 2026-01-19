

let name = "prince"
const roll = 317;

{
    
    // this is global scope
    let a = 10// not access in local scoped
    const b = 20// not access in local scoped
    var c = 30// access in local scopes 
    
    console.log(`global acces from local scope: ${roll}`);
    console.log(`global acces from local scope: ${name}`);
     
}

// console.log(a); is not define
// console.log(b);  is not define
console.log(c);



