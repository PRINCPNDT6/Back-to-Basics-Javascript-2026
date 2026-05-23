// for of 
// One-line yaad rakhne ka rule

// Frequency nikalni ho → obj[key] = (obj[key] || 0) + 1

// Duplicate check karna ho → if (obj[key] > 1)

// Unique array banana ho → if (!obj[key])

["", "", "", ""]
[{}, {}, {}]

let arr = [1, 3, 2, 5, 5, 4, 3, 3]

for(const iterator of arr){// object == arr
    // console.log(iterator);
    
}

let uniqueArr = []
let empObj = {}

    for(let num of arr){
        if(!empObj[num]){
            empObj[num] = true// empObj[1] = true hai to vo ab conditon ke andr nahi aayga 
            uniqueArr.push(num)
        }
    }
    // console.log(uniqueArr);
    // console.log(uniqueArr.sort((a, b) => a-b)); 
    // console.log(uniqueArr.sort((a, b) => b-a));

    let empObjTwo = {}
    for(let num of arr){
       
        empObjTwo[num] = (empObjTwo[num] || 0)+1
        
    }
    console.log(empObjTwo);

    for (let key in empObjTwo){
        if(empObjTwo[key] > 1){
            console.log(`${key} is duplicate`);
            

        }
    }
    

let greetings = "hello world"

for(let greet of greetings){
    // console.log(greet);
    
}