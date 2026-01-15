const PromiseFour = new Promise((resolve,reject) => {

    setTimeout(() => {
        // let error = true;
        // if(!error){
            resolve({name: "Prince sharma", rollno: "317", course: "BCA"})
        // }else{
            reject('ERROR: Something went wrong')
        // }
    },2000)
})

PromiseFour.then((userDetails) => {
    console.log(userDetails);
    
}).catch((error) => {
    console.log(error);
    
}).finally(() => {
        console.log('The Promise is either resolved or reject ');
        
})