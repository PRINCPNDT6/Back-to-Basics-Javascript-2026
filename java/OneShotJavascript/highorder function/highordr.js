// HIGHER ORDER FUNCTION
// Higher Order function are the function which accept A Function in a parameter Or  Return A function Or Both

// aeisa function jo  accept kr le parameter m eek or function ya fir wo return kr de ek or function   

// ForEach Method always takes another function inside it , So ForEach is a Higher Order Function 




function abcd(val) {
    console.log(val);
}

abcd(function(){console.log("heyy Prince");});

// )Example 2:

function ab(){
    return function(){}
}

ab();