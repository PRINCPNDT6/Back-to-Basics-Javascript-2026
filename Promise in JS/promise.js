const promiseOne =  new Promise(function(resolve, reject){
    // Do an Async task 
    // DB calls, cerptography, network 

    setTimeout(function (){
        console.log('Async task is complete');
         resolve() // connet with .then()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})
// =======================================================
// without store in any variable 
 
new promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task Two');
        resolve()
        
    }, 1000)
}).then(function(){
    console.log('Async Two Resolved');
    
})

 // =========================================================
 // parameter in resolve promise three
 const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
         

        resolve({username: "prince", email: "princedeveloper@gmail.com"}) // object in resovle parameter

    },1000)

 })

 promiseThree.then((userdetails) => {
    console.log(userdetails);
    
 })

 // ========================================
 // chaining method | return me .then(user) krte h 

 const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false;
        if(!error){

            resolve({username: "prince", pass: "1234"})
        } else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
 })
// wrong method error
//   const username = promiseFour.then((user) =>{  // alag variable me store ni kr skte  jb return krna ho promise me
//     console.log(user);
//     return user.username;
    
//  })

// console.log(username)  

promiseFour
.then((user) =>{
    console.log(user); // resolve()
    return user.username; // by chaining method 
    
 })
.then((username) => {
    console.log(username);
})
.catch((err) =>{
  console.log(err);  // reject()
  
}).finally(() => console.log(' the promise is either resolved or reject'));


    
 
     
     

  