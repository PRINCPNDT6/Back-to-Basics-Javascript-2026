const promise = new Promise((resolve, reject) =>{

    setTimeout(() =>{

        if(true){

            resolve({username: 'prince', course: 'BCA'}) // => User
        } else{

            reject('ERROR: Something Went Wrong')
        }

    })
})

// Async Await

try{
     async function userDetails(){
    let User = await promise;
    console.log(User);
    let name = await User.username;
    console.log(name);
    
    
 }
} catch(error){
    console.log(error);
    
    // console.log('ERROR', error);
    
}

userDetails()

// .then(), .catch() 

// promise.then((User) => {
//     console.log(User);
//     return User.username
    
// }).then((name) => {
//     console.log(name);
    
// }).catch((error) =>{
//     console.log(error);
    
// }).finally(() => {
//     console.log('Solve either ');
    
// })