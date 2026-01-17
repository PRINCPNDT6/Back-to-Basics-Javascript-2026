const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(Target,Source); // (obj4 == target)

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

console.log(Object.keys(obj4));



// const obj5 = {obj1,obj4}
// console.log(obj5);
