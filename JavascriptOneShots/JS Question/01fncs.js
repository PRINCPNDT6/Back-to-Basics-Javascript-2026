abc = 1000
// console.log(abc());
// infinite quering => 


function sum(a){
    return function fun(b){
        if(b != undefined){
            return sum(a+b)
        }
        return a
    } 
}

// console.log(sum(4)(2)(2)(2)());
// function curring => function inside a function
function fun(a){
    return function fun1(b){
        return function fun2(c){
            return function fun3(d){
                // return fun(a+b+c+d);
                return a+b+c+d;
            }
        }
    }
}

// console.log(fun(1)(2)(3)(4));

// var is not block of scope//   but function scoped also let and const 


// function diff(){
//     var a = 5;
//     let b = 5
//     const c = 5
     
// }
 
// diff()
// console.log(a);
// console.log(b);
// console.log(c);



// var a = 29
// let b = 34

// imp
// {
    
//     console.log(a);
//     console.log(b);
// }


{
    var a = 29
    let b = 34
    
}
// console.log(a);
// console.log(b);

console.log([] == []);
