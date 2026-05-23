fetch('https://exampleAPI/')
.then((response) =>{
            return response.blob
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) =>{
    console.log('ERROR:',error);
    
})
.finally('')