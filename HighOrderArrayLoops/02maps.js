//  map

const map = new Map()
map.set('In', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Ind', "india")  
map.set('In', "india") // it does not contais duplicate key 
// console.log(map);

for(let cntry of map){ // is se key and value aray me 
    // console.log(cntry);
    
}

for(let key of map){
    // console.log(key); // is se bhi array me key and value
    // console.log(`${key}:`);// is se bhi key and value but without array
     
    // console.log(key, value); 
    
}
for(let [key] of map){ // [key, value]
    // console.log(key); // ab only key 
    // console.log(`${key}:`); 
     
    // console.log(key, value);  // loop me [key, value]
    
}

let obj = {
    1:"a",
    1:"a",
    2:"b",
    3:"c"
}

for(let  key in obj){ // [key, value] wrong 
    console.log(key);
    // console.log(key, value);
    
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
