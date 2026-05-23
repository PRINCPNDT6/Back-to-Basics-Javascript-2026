let arr = [1, 2, 45, 23, 34, 45, 65, 43, 34, 34, 43]
let initialVal = 0
const reduceArr = arr.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    initialVal, // first time ye accumulator me 0 and The End
    // console.log(currentVal),
    // console.log(accumulator)
);

// console.log(reduceArr);

const myNum = [12, 34, 55, 7, 34, 3]
const evenNum = myNum.filter((num) => num%2 == 0 )
// console.log(evenNum);

// const addevenNum = evenNum.map((num) => num+num)

// let initialVal = 0
const addevenNum = evenNum.reduce((acc, crntVal) => {
    // console.log(`acc: ${acc} and crntVal: ${crntVal}`);
    
    return acc + crntVal
}, initialVal

)
// console.log(addevenNum);

let str = "This is the Reduce Function"

let strArr = str.split(" ")

let revStr = strArr.reduce((acc, crntVal) =>{
    return crntVal +" " +  acc
}, "")

// console.log(revStr);

const shoppingCart = [
    {
        course: "JavaScript",
        price: 999
    },
    {
        course: "React",
        price: 1999
    },
    {
        course: "Node.js",
        price: 1499
    },
    {
        course: "Full Stack",
        price: 3999
    }
];

const totalCartPrice = shoppingCart.reduce((acc, item) =>{
    console.log(`${item.course} : ${item.price}`);
    
    return acc + item.price
}, 0)
console.log(totalCartPrice);










