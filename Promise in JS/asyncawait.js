async function getAllUsers(){
    console.log('No internet access');
    try {
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
       console.log(response);
       const data =  await response.json()
       console.log(data);
       
       
       
    } catch (error){
        console.log("ERROR:", error);
        
    }
    
}

getAllUsers() 