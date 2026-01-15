const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = false;

        if(!error){
            resolve({username: 'javascript', password: '112233'})

        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)


});

// async await 

/*  
only for resolve() 
 const response =  await promiseFive
        console.log(response);
*/
//  reject() ke lie try catch 

 async function consumePromiseFive(){
    try{ // resolve()
        const courseDetail =  await promiseFive
        console.log(courseDetail);
        
    }catch (error){ // reject() access
        console.log(error);
        
    }
 }

 consumePromiseFive()