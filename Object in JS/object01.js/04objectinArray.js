const User = [
//    userOne: { // array me aeise keys nahi hoti
    {
        name1: "prince",
        email1: "xyz@gmail.com",
    },

    {
        name2: "prince",
        email2: "xyz@gmail.com",
    },

    {
        name3: "prince",
        email3: "xyz@gmail.com",
    },

]

console.log(User[1].name2);
// User Array hai to use index se acces krenge phle Obj ko index[1] se acces krenge
// fir object ke andar . se acces krenge 

// console.log(User);

// console.log(Object.keys(User)); // User Array me 0, 1, 2 index hai
// console.log(Object.values(User)); // Array me value(Object)
// console.log(Object.entries(User)); //Array me  keys, values(Object)


const User1 = {
    name: "prince sharma",
    roll: 317,
    course: "BCA",
}

console.log(Object.keys(User1)); // Array me key
console.log(Object.values(User1)); // Array me values
console.log(Object.entries(User1)); // Array me keys and value

console.log(User1.hasOwnProperty('course'));
console.log(User[0].hasOwnProperty('email1'));

