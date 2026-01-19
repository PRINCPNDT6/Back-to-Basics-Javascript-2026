function calculateCartPrice(num1, ...num2){
    return  num2
}

const price = calculateCartPrice(230, 238, 432)
// console.log(price);

const user = {
    username: 'prince sharma',
    salarys: 30000,

}

const userEntry = function handleObject(anyObject){
     return `Username is: ${anyObject.username} and Salary is:${anyObject.salary}`
       
}

// console.log(userEntry(user));
console.log(userEntry({
    username: 'Riya Dubey',
    salary: 30000
}));
