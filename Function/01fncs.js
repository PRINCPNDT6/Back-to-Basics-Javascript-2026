// console.log("P");
// console.log("R");
// console.log("I");
// console.log("N");
// console.log("C");
// console.log("E");

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
    
}

// sayMyName // reference
// sayMyName() // execution
// sayMyName() // execution


//1) Method
 function addTwoNumbers(num1, num2){ // (defination), num1 and num2 are parameter
          console.log( num1 + num2); // 
        //  return num1 + num2; // no output , return store  in variable 
          
}
 
 
// addTwoNumbers(2, null) // arguments

// addTwoNumbers(2,"2") // arguments 

// const result = addTwoNumbers(2,"2") // arguments 
// console.log(result); // result me function ki return ki gyy value aati hai or isme return nahi hai to undefine aayega

// 2)Method 
  function returnFncs(num1, num2){
      //   console.log(num1 + num2); // with undefined => 22
        return num1 + num2;
        console.log("no print/work after return ");
        


  }
//   console.log( returnFncs(2, "5"));// 25
  
const returnResult = returnFncs(2, "2") // is variable me return ki hui value aati hai
// console.log(returnResult);  // it used to store return value

 // 3)Method 

 let returnValue = function retrnVal(num1, num2) {
     // console.log(num1 + num2); // with undefined => 22
    return num1 + num2;
    console.log('is log se phle hi function return ho gyaa');
    
    
 }
// console.log(retrnVal(2, 3)); // Error not define retrnVal

//  console.log(returnValue(2, "2")); 
 

// function loginUserMessage(username = "sam"){ ye default value hai agr undefined hua to else ye override ke jaygi
function loginUserMessage(username){
    //   console.log(`${username} Just Logged in`); // yaha log krne se bss fncs ko only execute krna hota hai fncs ko log me ni krna

    if(username === undefined){
    // if(!username){
        console.log('please enter a user name:');
        return // iske baad wala code execute ni hota
    }
        return `${username} Just Logged in`
    
}
  
  console.log( loginUserMessage());
  