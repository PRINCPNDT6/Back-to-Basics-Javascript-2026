// in nested fncs child fncs acess from parent

function one(){
    const name = "prince"
    
    // is function me jb jayega jb one() execute hoga
    // two() // prince from one()
    function two(){
        const lastname = 'sharma'
        const fullname = 'prince sharma'
        
        // yahan name console hone se phle two ko execute krna pdega 
        console.log(`${name} from one()`); // acess from local scope in global scope
        
    }
    // two() // prince from one()
    console.log(`${name} from two()`); 
    two()  
     
    // console.log(fullname); not access from outSide the  global Scope 
    
}

one()