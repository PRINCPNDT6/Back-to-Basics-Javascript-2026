// promise

const revisePromise = new Promise((resolve, reject) =>{
 
        setTimeout(() =>{
            if(true){

                resolve("API");
            }else{

                reject("somthing went wrong");
            }
        },1000)
});

revisePromise.then((userDetails) =>{
    
    console.log(userDetails);
}).catch((Error) =>{
    
    console.log(Error);
})


// Async Await code

const asyncPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if (true) {
            
            resolve({name: "prince", Address: "Chittam Kheri", currentAddress: "Meerut", phno: 7409227135})
        } else {
            
            reject("ERROR: Something Went Wrong")
        }
    },2000)
});

        async function promiseAsync( ) {
           
            try{

                const userData = await asyncPromise;
            console.log(userData);

            const userAdderss =await userData.Address;
            console.log(userAdderss);
            }catch(Error){

                console.log(Error);
                
            }
            
         }

        promiseAsync();


        // Fetch  API code 

        const fetchCode = new Promise((resolve, reject) =>{

            setTimeout(() =>{
                let error = false;
                if (!error) {
                    
                    
                    console.log("fetch code");
                    resolve(fetch('https://jsonplaceholder.typicode.com/users'));
                } else {
                    
                    reject('ERROR: Something Went Wrong')
                }
            },3000)
        });

        fetchCode.then((ApiData) =>{
            
            console.log(ApiData);
            return ApiData.headers;
        }).then((headers) =>{
            
            console.log("Return ApiData.headers: ");
            
            console.log(headers);
            
        }).catch((err) =>{
            console.log(err);
            
        });


        // fetch API Async Await

        const fetchAsync = new Promise((resolve, reject) =>{

            setTimeout(() =>{

                if (true) {
                    console.log('fetch async code');
                    resolve(fetch('https://jsonplaceholder.typicode.com/users'));
                } else {
                    reject('ERROR')
                    
                }
            },6000)
        })

         
        async function AsyncFetchCode() {
                    try {
                        const apidata = await fetchAsync;
                    console.log(apidata);

                    const apidataHeaders = await apidata.headers;
                    console.log(apidataHeaders);
                    
                    } catch (error) {
                        
                        console.log(error);
                        
                    }
                }
                AsyncFetchCode()
                
                    

