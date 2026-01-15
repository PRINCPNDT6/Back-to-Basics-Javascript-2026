//  week program 

// const week = 1



// switch (week) {
//     case 1:
//         console.log("monday");
        
//         break;
//     case 2:
//         console.log("tuesday");
        
//         break;
//     case 3:
//         console.log("wednesday");
        
//         break;
//     case 4:
//         console.log("thrusday");
        
//         break;

//     default:
//         console.log("default value");
        
//         break;
// }

//  

const result = "fail"

switch(result){
    case "pass":
        console.log("umang sharma");
    break;
    
    case "fail":
        console.log("riya dubey");
    break;
    
    case "pass":
        console.log("vansh sharma");
    break;
    
    case "fail":
        console.log("vipul kumar");
    break;

    default :
        console.log("not founded");
    break;
    
}

// false value 

// false, 0, -0, BigInt, "", null, undefined, NaN

// true value

// true, "0", `false`, " ", [], {}, function(){}, 

// const user = true

if (false==0) {
    console.log("true");
}
else{
    console.log("false");
    
}

if (false=="") {
    console.log("true");
}
else{
    console.log("false");
    
}

if (true==1) {
    console.log("true");
}
else{
    console.log("false"); 
    
}

if (0=="") {
    console.log("true");
}
else{
    console.log("false");
    
}


// Nullish Coalescing Operator (??):  null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
val1 = null ?? undefined ?? 10

console.log(val1);

//  Terniary Operator 

// condition ? true : false

const iceteaprice = 100
iceteaprice <= 80  ? console.log("less than 80") : console.log("more than 80");

const hotteaprice = 100
hotteaprice >= 80  ? console.log("more than 80") : console.log("less than 80");



