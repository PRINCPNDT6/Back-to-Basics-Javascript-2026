// Dates
// 1)
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// 2)
let myCreateDate = new Date(2026, 1, 16)// mnth start  at 0 in javascript 1 => feb
// let myCreateDate = new Date(2026, 1, 16, 5, 3)//when mnth digit is single, mnth start  at 0 in javascript 1 => feb
// let myCreateDate = new Date("01-15-2026")// MM-DD-YY, mnth start at 1 
// console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());

// 3)
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(myCreateDate.getDay());
// console.log(myCreateDate.getDate());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1);

// console.log(`Date: ${newDate.getDate()} and the Time: ${newDate.getTime()}`);

// 4)
console.log(newDate.toLocaleString('default', {
    weekday: 'short'
}));
console.log(newDate.toLocaleString('default', {
    Date: 'short'
    
    // timeZone: ''
}));
