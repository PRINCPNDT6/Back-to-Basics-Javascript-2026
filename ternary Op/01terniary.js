// condition ? true : false

const age = 18

// age >= 18 ? console.log('adult') : console.log("teenager")


// 
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        // console.log("the end");
        // break; // jump line no: 20
        
        // console.log("Detected 5");
        continue;// ye 5 print ko skip krega
        
    }
    // console.log(`value of i is: ${index}`);
     
     
    
}

let index = 0
while (index <= 10){
    // console.log(`index: ${index}`);

    index +=2
     
}

let myArr = ["prince", "nikhil", "sagar", "vipul"]

let arrIndex = 0;
while(arrIndex < myArr.length){
    let arrValue = myArr[arrIndex]
    // console.log(`index: ${arrIndex} | value: ${arrValue}`);
    // console.log(arrValue);
    
    arrIndex++
}

// do while

let score = 0
do {
    console.log(`prince score is: ${score}`);
        score++
    
    } while (score <= 10) // false hone pr 51 line jump krega else jump line no: 45

do {
    console.log(` sam score is: ${score}`);
        score++
    
    } while (score <= 20)
