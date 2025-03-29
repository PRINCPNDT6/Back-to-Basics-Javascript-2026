
// object literals

const mySym = Symbol("key1")  // about of symbol in depth
const newUser = {
    name: "prince",
    "fullname": "prince sharma",
    [mySym]: "myKey1",
    // mySym: "simple key2",
    age:20,
    email: "prince@gmail.com",
    isloggedIn: false,
    location: "meerut",
    lastlogginDays: ["monday","saturday"],
     

}

console.log(newUser.name);
console.log(newUser["name"]);
// console.log(newUser.fullname); // not access
console.log(newUser["fullname"]);
console.log(newUser[mySym]); // symbol in depth
// console.log(newUser.mySym);
// console.log(newUser["mySym"]);
console.log(newUser["age"]);
console.log(newUser.email);
console.log(newUser.isloggedIn);
console.log(newUser.location);
console.log(newUser.lastlogginDays);


