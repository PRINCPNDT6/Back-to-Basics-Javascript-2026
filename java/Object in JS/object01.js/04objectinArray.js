const User = [
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

User[1].name1

const User1 = {
    name: "prince sharma",
    roll: 317,
    course: "BCA",
}
console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));
console.log(Object.keys(User1));
console.log(Object.values(User1));
console.log(Object.entries(User1));

console.log(User1.hasOwnProperty('course'));
console.log(User.hasOwnProperty('email1'));

