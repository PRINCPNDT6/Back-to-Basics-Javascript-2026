
// object literals

const mySym = Symbol("key1")  // about of symbol in depth
const newUser = {
    name: "prince",
    "fullname": "prince sharma",
    [mySym]: "myKey1", // define krna hota hai key bnane ke lie 
    // mySym2: "simple key2",
    age:20,
    email: "prince@gmail.com",
    isloggedIn: false,
    location: "meerut",
    lastlogginDays: ["monday","saturday"],
     

}

    // Object.freeze(newUser) // value acces nahi krta

// console.log(newUser.name);
// console.log(newUser["name"]);
// console.log(newUser.fullname); // not access
// console.log(newUser["fullname"]);
console.log(newUser[mySym]); // symbol in depth
// console.log(typeof newUser[mySym]); // symbol in depth
// console.log(newUser.mySym2); // wrong Method
// console.log(typeof newUser.mySym2); // string
// console.log(newUser["mySym"]);

// console.log(newUser["age"]);
// console.log(newUser.email);
// console.log(newUser.isloggedIn);
// console.log(newUser.location);
// console.log(newUser.lastlogginDays);

newUser.greeeting = function(){
        console.log("hello ");
        
}

newUser.greeetingTwo = function(){
        console.log(`Hello from object fncs: ${this.name}`);
        
}

console.log(newUser.greeeting());
console.log(newUser.greeetingTwo());



