let arr = [250, 645, 300, 900, 50]


let off = 0;
let totalArrPrice = 0;
let finalPrice = 0;
for(let i = 0; i<arr.length; i++){
     off +=  arr[i]/10;
     totalArrPrice += arr[i];

     
    }
    finalPrice += totalArrPrice-off;
console.log(finalPrice);




//  let finalprice = 0;
// for(let val of arr){
//    let offer = val/10;
//     // console.log(offer);  aalg price ka discount
//     // console.log(off-offer); hr product ka discount sub 
    
//     finalprice += (val-offer)

// }

// console.log(finalprice);

// let offer = 0;
// let arrsum = 0;
// for(let off of arr){
//     offer += off/10;

//     arrsum += off;

// }

// console.log(arrsum-offer);
