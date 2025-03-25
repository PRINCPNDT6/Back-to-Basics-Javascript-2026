// Heap Memory [Non Primitive] Reference

// Non primitive datatype ---> Heap memory --> Original Value Change 
let userName = {
    firstname: "Prince",
    age: 20,
    roll: 317,
}

let newName = userName

console.log(newName);
console.log(userName);

newName.firstname = "prince sharma";

console.log(newName);
console.log(userName);

 
    newName.firstname = "riya";
    newName.age = 19;
    newName.roll = 331;

 
console.log(newName);
console.log(userName);