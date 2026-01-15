 const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 3000)
 })

 promiseOne.then(function(){
    console.log("Promise consumed");
    
 });

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async 2 task is complete');
        resolve()
    },1000)
 }).then(function(){
    console.log("Promise two resolved");
    
 });

 const PromiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Prince", Email: "xyz@gmail.com", pass: "1234"})
    },1000)
 })

 PromiseThird.then(function(userDetails){
    console.log(userDetails);
    

 })

// =======================================

 const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true // false = username print 
        if(!error){
            resolve({username: "Prince", Email: "xyz@gmail.com", pass: "1234"})
        } else{
            reject('ERROR: Something went wrong')
        }

    }, 1000)
 })

 PromiseFour
 .then((userDetails)=>{
    console.log(userDetails);
   //  return userDetails.username
  }).catch((error) => {
    console.log(error);
    
  }).finally(() => console.log('The Promise is either resolved or reject '));