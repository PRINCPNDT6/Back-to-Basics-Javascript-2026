console.log("prince sharma");

// const == do not  change value during the execution of the program 
/* var  == perfer not to use 
becouse of issue in block scope and functional scope */
// so we can use let 
const accountId = 1223
let accountEmail = "google.com"
var accountPass = "1222"
accountCity = "meerut"
console.log([accountId,accountEmail,accountPass,accountCity])

// let accountEmail = "facebook.com" wrong way for write to use

// const ko same scope me dobara declare nahi kar sakte
// const accountId = 1223
  accountEmail = "facebook.com"
  accountPass = "333"

  // “Never declare variable without let, const, or var”
accountCity = "baghpat" // this is automatically diclared var  by js


console.log([accountId,accountEmail,accountPass,accountCity])
