// resolve method .then() (Async Code)

// promise me return ko hm function variable se return ni kr skte .then() chaining system se krte hai

const promiseOne = new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("promise one complete after 5s");
            
        }, 5000)
        resolve() // resolve phle and complete after 5s
});

promiseOne.then(() => {
    // setTimeout(() =>{
         console.log('Promise One resolve');
    // }, 5000)
    
});

// promise  without async code
const PromiseTwo = new Promise((resolve, reject) =>{

    resolve()
})

PromiseTwo.then(() =>{
    console.log('promise two resolve without async code');
    
})

// two resolve(parameter) and .then(arguments)

 const promiseThree = new Promise((resolve, reject) =>{
        setTimeout(() =>{

            resolve({ resolve:' promiseThree after 1s', username: 'prince sharma', rollno: 317, Course: 'BCA'})
        }, 1000)
 })
promiseThree.then((userdetails) =>{
    console.log(userdetails);
    console.log(userdetails.username);

    return userdetails.rollno;
    
}).then((rollno) =>{
    console.log(rollno);
    
})

// promise three reject .catch()

const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = false;

        if(!error){
            resolve({ resolve:' resolve promiseFour  without using seconds in setTimout', username: 'PRINCE SHARMA', skill:'js'})
        } else{
            reject('ERROR: Something Went wrong ')
        }
    })
})

promiseFour.then((user) =>{
    console.log(user);
    
}).catch((error) =>{
    console.log(error);
    
})
.finally(() =>{
    console.log(' (promiseFour): The Promise is Either Resolve or Reject');
    
})