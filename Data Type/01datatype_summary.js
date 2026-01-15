// there are two type of javascript 
// 1) Primitive Data Type 
// SSBBNNu inme copy krke hi value change hoti hai
String
Number
null
undefined
Symbol
BigInt
Boolean

// 2) Non Primitive (Reference )
// (){}[]
// Functions ()
// Objects {}
// Array []

// let id = Number('123')  
// let anotherId = Number('123')  

let id = Symbol('123')
let anotherId = Symbol('123')

console.log("id:" , id);
console.log("anotherId:" , anotherId);
console.log(anotherId === id);
console.log(anotherId == id);

