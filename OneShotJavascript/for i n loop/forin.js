let obj1 ={
    name: "prince",
    rollno: 317,
    city: "meerut",
    age: 20,


}

for(let key in obj1){

    // key hme index value deti hai !!  or obj[key] == hme obj or array ke andrr index pr jo value hai vo deta hai
    // console.log(key);  
    // console.log(obj1);  //  ye loop ke andrr hai to ye object 4 baar print hoga mtlb ki jitni value utni baar loop chlega
   
    // console.log(obj1[key]);
    // console.log(obj1.key); // undefined
    
    console.log(key,obj1[key])
    }
    // array me for in loop kaam krta hai or hm array me iski property ko dot(.) lga kr acces krte hai
    let arr1 = [1,2,3,4,5]

    for(let key in arr1){
    //  console.log(arr1.key); // undefined
        console.log(key,arr1[key]);
        // console.log(arr1[key]);
     //  console.log(arr1.length);
     //  console.log(arr1.pop(2));
     //  console.log(arr1.shift(0));
         


        
    }
    
    
    
    
    
