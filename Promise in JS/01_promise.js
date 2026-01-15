const promiseOne = new Promise((resolve, reject) => {
 
    setTimeout(() =>{
        let error = false;
        if(!error){
            reject("ERROR: Something Went Wrong")
        }else{
            resolve({username: 'prince sharma', rollno: '317',})
        }
    }, 1000)
});

promiseOne.then((user) =>{
    console.log(user);
    return user.username;
     
    

}).then((username) =>{
    console.log(username);
    
     
}).catch((err) =>{
    console.log(err);
    
})

// ========================

const promiseFetch = new Promise((resolve, reject) => {
    setTimeout(() =>{

        let error = false;
        if(!error){

            resolve(fetch('https://jsonplaceholder.typicode.com/users'));
        } else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

// promiseFetch.then((response) =>{
//     return response.json()


// }).then((data) =>{
//     console.log(data);
    
// }).catch((err) =>{
//     console.log(err);
    
// })



async function asyncfnc(){

    try{
         const response = await promiseFetch;
  const data = await response.json()
  console.log(data);
    } catch(error){
        console.log('ERROR', error);
        
    }
}
asyncfnc()
 
  