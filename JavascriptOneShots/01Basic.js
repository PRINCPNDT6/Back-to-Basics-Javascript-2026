    // word vs keyword

        //  word jiska kuchh meaning nahi hota hai js me 
        // keyword jiska ek particular meaning hota hai js me 
        // like var, let, const, if, else, for, while, function, return etc
        var name = "harshit"; // var is a keyword
        console.log(name); // name is a word 
        //   var var = 10; // cannot use keyword as a variable name
        //   console.log(var);
        var _name = "harshit"; // _ is allowed =====
        var $name = "harshit"; // $ is allowed 
        //  var @name = "harshit"; // @ is not allowed
        // var -name = "harshit"; // - is not allowed
        
        
        // var 1name = "harshit"; // cannot start with a number  ======
        // var my name = "harshit"; // cannot have space in between  ======
        var name1 = "harshit"; // can have number at the end =====
        var name_1 = "harshit"; // can have _ in between =====
        var myName = "harshit"; // camel case notation
        var MyName = "harshit"; // pascal case notation
        var my_name = "harshit"; // snake case notation
        console.log(myName);
        console.log(MyName);
        console.log(my_name);
        // case sensitive hota hai js
        var city = "delhi";
        var City = "jaipur";    
        console.log(city);
        console.log(City);  
        // var city = "mumbai"; // cannot re-declare a variable
        city = "mumbai"; // can re-assign a variable    
        console.log(city);

        // )Const 
        // jiski value change na ho sake
        const pi = 3.14;
        const name = "prince"

// ✅ var की Simple Definition in Hindi:

// var JavaScript में एक ऐसा keyword है जिससे हम variable declare करते हैं।

// विशेषताएँ:

// इसकी value को change (re-assign) किया जा सकता है।

// इसे फिर से declare भी किया जा सकता है।

// यह function scope में होता है, ना कि block scope में।

// मतलब अगर आपने var को किसी block (जैसे if, for, while) के अंदर declare किया है, फिर भी वह पूरे function के अंदर accessible रहेगा।

// ये पुराने JavaScript code (ES5 और पहले) में ज्यादा use होता था।

// इसे अब कम use किया जाता है, क्योंकि let और const ज्यादा safe और modern हैं।

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10, kyunki var function scope me hai
}
test();

// var function scope se bahar accessible nahi hota hai
function demo() {
    if (true) {
        var y = 20;
    }
    console.log(y); // Output: 20, kyunki var function scope me hai
}
demo();

// function ke bahar var declare karenge to wo global scope me accessible hota hai
var globalVar = "I am global";
function showGlobalVar() {
    console.log(globalVar); // Output: I am global
}
showGlobalVar();

let globalLet = "I am global let";

function myFunc() {
  if (true) {
    // let globalLet = "I am local let";  // remove this line
    console.log(globalLet);  // Output: I am global let
  }
  
  console.log(globalLet);  // Output: I am global let
}

myFunc();


function myFunc() {
  let globalLet; // function scope me declare

  if (true) {
    var globalVar = "I am local var";
    globalLet = "I am local let";  // block ke andar sirf assign kiya
    console.log(globalVar);  // I am local var
    console.log(globalLet);  // I am local let
  }

  console.log(globalVar);    // I am local var
  console.log(globalLet);    // I am local let
}

var globalVar = "I am var";
let globalLet = "I am let";

function myFunc() {
  if (true) {
    var globalVar = "I am local var";  // function ke andar var declare kiya
    let globalLet = "I am local let";  // block ke andar let declare kiya isme de let htana hoga tb function me error ni aayga block se bahar 
    console.log(globalVar); // I am local var
    console.log(globalLet); // I am local let
  }
  
  console.log(globalVar); // I am local var
  console.log(globalLet); // Error: globalLet is not defined
}

myFunc();

console.log(globalVar); // I am var
console.log(globalLet); // I am let





let globalLet = "I am global let";

function myFunc() {
  if (true) {
    let globalLet = "I am local let";  // block scoped local variable
    console.log(globalLet);  // Output: "I am local let"
  }
  
  console.log(globalLet);  // Error: globalLet is not defined
}

myFunc();



let globalLet = "I am global let";

function myFunc() {
  if (true) {
    globalLet = "I am local let";  // block mein new variable nahi declare, globalLet ko assign kiya
    console.log(globalLet);  // Output: "I am local let"
  }
  
  console.log(globalLet);  // Output: "I am local let"
}

myFunc();
