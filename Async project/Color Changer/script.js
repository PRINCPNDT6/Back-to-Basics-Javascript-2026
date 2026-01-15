 const randomColor = function(){

     let hex = '0123456789ABCDEF';
     let color = '#';
     
     for(let i =0; i<6; i++){

    color += hex[Math.floor(Math.random() *16)];
     }
     
     return color;

    };
    
   const startbtn = document.querySelector('#start');
   const stopbtn = document.querySelector('#stop');

   flag = 1;
   let intervalId;
   startbtn.addEventListener('click', function(){
        if(flag ==1){
        intervalId =  setInterval(function(){
         document.body.style.backgroundColor = randomColor();
     },1000)
     }
     flag = 0;
    });
 
         stopbtn.addEventListener('click', function(){
           
            clearInterval(intervalId);
        // document.body.style.backgroundColor = '#fff';
        flag = 1;
    });
 
    