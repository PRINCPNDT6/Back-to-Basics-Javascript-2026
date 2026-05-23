// (fncs defination)(execution) global scope polution ko avoid krne ke lie
// (function ife(){
//     console.log('DB Connected');
    
// })();

// ((name) =>{

//     console.log(`use semicoln befaore second iife ${name} `);

// })();

// default para//////////////////////////////////////
// ((name = "parameter") =>{
//     console.log(`avoid undefind error by using default: ${name}`);
    
// })();

// default fncs ///////////////////////////////////////////////
// const hndlErr = () =>{
//     return "avoid undefind error by using default fncs";
    
// }
// ((name = hndlErr()) =>{
//     console.log(`  ${name}`);
    
// })();

// throe new error ///////////////////////////////////
function check( ){
 
  throw new Error("param required"); 
   
}

try {
    // ((name = check()) =>{
    ((name) =>{
    console.log(name); // ye yaha tk aayega nahi qki throw error prog ko stop kr deta hai or check ne kuchh return ni kia name me
    
})(check())
} catch (err) { // catch ke andr jo erroe throw hua vo hai 
    console.log(err.message); // or err.message ne print kia  throe error ko
    console.log(err); // ye  pura  error object ko recive krta h 
    console.log(err.name);  // Error
}



