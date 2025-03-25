//   primitive datatype ---> stack memory --> only copy

let userName = "Prince"
let newName = userName
 

console.log(newName); // prince
console.log(userName); // prince

let userName = "Prince"
let newName = userName
 let newName = "Sharma"

console.log(newName); // sharma 
console.log(userName); // prince


