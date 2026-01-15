let heading = document.querySelector('h1')
let start = function(){
    console.log('prince');
    
    
}
let intervelId; 
document.getElementById('start').addEventListener('click',function(){
       intervelId  = setInterval(start,1000)
      
       console.log('STARTED');
       
      
});

 

 document.getElementById('stop').addEventListener('click',function(){
 

         clearInterval(intervelId)
    console.log('STOPPED');
 
     
 });
