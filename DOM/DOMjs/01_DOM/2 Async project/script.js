
setInterval(function(){
    // console.log('prince');
    
},2000);

setTimeout(function(){
    // console.log('PRINCS');
    
},4000);
setTimeout(function(){
    // console.log('prince');
    
},2000);
setTimeout(function(){
    // console.log('sharma');
    
},1000);

const sayPrince = function(){
    // console.log('Prince');
    
}

setTimeout(sayPrince, 5000)

const fullstack = function(){
    const changestack = document.querySelector('h1').innerHTML = "FULL STACK DEVELOPER"
    console.log(changestack);
    
}
const stopStack = setTimeout(fullstack ,6000)

document.getElementById('stop').addEventListener('click',function(){
    console.log('STOPED');
    
    clearTimeout(stopStack)
})