let array = [0,1,2,3,4,5,6,7,8,11]
// const result = array.filter((num) => num = num+10)
// const result = array.filter({ return (num) =>num%2 == 0})


let empAray = []
array.forEach((num) => empAray.push(num+10) )

// console.log(empAray);



// map modify krta hai array ko
let result = array.map((num) => num + 10 )
// console.log(result);

const myNum = array // dusre map me value pahle map se pass and apply hokar aaygi 
                .map((num) => num*10)//   [0,10,20,30,40,50,60,70,80,110] ab ye array again map me jaygi 
                .map( (num) => num+1) //  [1,11,21,31,41,51,61,71,81,111] or ye array filter hoga
              //.filter((num) => num > 30)
let fltrNum = myNum 
                .filter((num) => num > 30)
                // console.log(myNum);
                // console.log(fltrNum);
                
                
let str = "this is the map";

let strArr = str.split(" ")
strArr.push("method")
// console.log(strArr);

 let strMap = strArr.map((word) => word[0].toUpperCase()+word.slice(1) )
 console.log(strMap);
 