// max array with fncs 

const newArray = [200, 300, 400, 500]

function returnMaxValue(anyArray){
  let max = anyArray[0]
  //   let min = anyArray[0]
    anyArray.forEach(e => {
     
      if(e > max){
          max = e
        }
        
    })
    return max
 }
    
// console.log(returnSecondMaxValue(newArray));

//  second max in array wih fncs 
const secondAray = [100, 200, 300, 400]


const secondMax = (anyArray)=>{
    let max = -Infinity
    let second = -Infinity
    anyArray.forEach(e =>{
                // console.log(e);
        if(e > max){
            second = max
            max = e 
        } else if( e > second && e !== max)
            second = e
                        
    })
    return [second,max]

}

console.log(secondMax(secondAray));

//second min in array with fncs

const secondMin = (anyArray) =>{
    // let min = anyArray[0] iske lie for loop or let e = anyArray[i]
    let min = Infinity
    let second = Infinity

    anyArray.forEach( e =>{
        if(e < min){
            second = min
            min = e
        }else if (e > min && e < second){
            second = e
        }
    })
    return [min,second] 

}

console.log(secondMin(secondAray));





// reverse string with the help of funcs
const newString = 'Prince Sharma'

const reverseStr = function revString(getString){
    return getString.split('').reverse().join('')
    // return getString.split(' ').reverse().join(' ') // word basis pr
}

// console.log(reverseStr(newString));
