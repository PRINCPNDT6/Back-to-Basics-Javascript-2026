// // Jo function jahan define hota hai,
// // wahi aur uske andar hi access hota hai.

// function one(){
//     console.log('one()');
//     Two()
    
//     function Two(){
//         // one()
//         console.log('Two()');
//         Three()
        
//         function Three(){
//             // Two()
//             console.log('Three()');
//             // Two()
            
//         }
//     }
// }

// one()

////////////////
function outer() {
    // let count = 0;

    function inner(counts) {
        counts++;
        console.log(counts);
    }

    return inner;
    // inner()
}

const fn = outer(); // outer finish ho gaya
console.log(fn(0));
 // 1
// fn(); // 2/
// fn(); // 3
