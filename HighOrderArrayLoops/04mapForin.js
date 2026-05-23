const map = new Map()
map.set('In', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Ind', "india")  
map.set('In', "india") // it does not contais duplicate key 

for(let key in map){
    console.log(key);
    // console.log(map);
    
}

// map or array pr for of loop 
// or Object pr for in loop

