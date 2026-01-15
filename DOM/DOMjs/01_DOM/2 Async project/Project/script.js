
const getrandomBackgroungColor = function (){
    const hex = Math.floor(Math.random() * 0xffffff).toString(16)
    return '#'+ hex.padStart(6, '0');
}
const changeBackground = function(){
    const color = getrandomBackgroungColor();
    document.body.style.backgroundColor = color;
}


const startbtn = document.getElementById('start')
let intervelId;
startbtn.addEventListener('click',function(){
    // const color = getrandomBackgroungColor();
    // const changeBackground = document.body.style.backgroundColor = color;
   if(!intervelId){

       intervelId = setInterval(changeBackground, 1000);
   }
     
});

const stoptn = document.getElementById('stop')
stoptn.addEventListener('click',function(){
    clearInterval(intervelId)
    intervelId = null;
     
});
