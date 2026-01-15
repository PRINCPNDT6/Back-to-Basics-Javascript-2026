const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i< 6; i++){
        color += hex[Math.floor(Math.random()* 16  )]
    }
     return color;
};

 
let intervalId;

 
    
    const startChaingingColor  = () => {
       if(!intervalId){
         intervalId =   setInterval(() =>{
            document.body.style.backgroundColor =  randomColor();
        },1000)
       }
    };
   

 

    const stopChaingingColor = () => {
         clearInterval(intervalId)
         intervalId = null;
    };

   
 


startBtn.addEventListener('click',startChaingingColor)
stopBtn.addEventListener('click',stopChaingingColor)