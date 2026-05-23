const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swipt by apple"
}

for(let key in myObj){
    // console.log(key);
    // console.log([key]);
    
}

for(let value in myObj){
    // console.log(myObj[value]);
    
}
// {myObj[key] se value acess 
for(const key in myObj){
    // console.log(`${key}: shortcut is for: ${myObj[key]}`);
    }


    let arr = [1,2,4,"js", "py"]
// array me default keys hoti hai 0 se start hoti hai
    for(const key in arr){
        console.log(key);  
    }


