// Filter condition check krta hai if ture to element array me aayga agr condition false to element array me nahi aaeyga
// ye array ko modifi nahi krta
const arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.filter((num) => num > 4));
const myNum = arr.filter((num) => num > 4) // here is no need to writte return
// console.log(myNum);
// console.log(arr);

const newNum = arr.filter((num) =>{
    // num > 5 // but in that case we have to write return keyword
    return num > 4
})

// console.log(newNum);

// const array = [1, 34, 45, 6, , 43, 32, 2]
const newNums = []

arr.forEach((num) =>{
        if(num > 4){
            newNums.push(num)
        }
})

// console.log(newNums);


const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 2003, edition: 2007 },
  { title: "Book Four", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Five", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Six", genre: "History", publish: 1985, edition: 1996 },
  { title: "Book Seven", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Eight", genre: "Non-Fiction", publish: 2015, edition: 2020 },
];

// const userBooks = books.filter((bookObj) => bookObj.genre === "History")
let userBooks = books.filter((bookObj) => bookObj.publish > 2000 && bookObj.genre === 'History' )
// book me genre == book aayegi jo userBooks me store hogi

// userBooks = books.filter((book) => { book.publish > 1085})
userBooks = books.filter((book) => { return  book.publish > 1985})
// isne upr wali books ko override kr dia ab vo delet ho gy array me se ye nahi books update hui hai


// console.log(userBooks);



let str = "This is the Reduce Function"

let strArr = str.split(" ")
console.log(strArr);


let eqStr = strArr.filter((str) => str == "This")
let filStr = strArr.filter((str) =>  str.length > 5)
console.log(eqStr);

console.log(filStr);






