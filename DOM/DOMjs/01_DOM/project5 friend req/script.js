const btn = document.querySelector('#btn-Add')
btn.addEventListener('click', function(){
    btn.innerHTML = "Request Sent";
        const followers = document.querySelector('#followers')
        followers.innerHTML = "999"

    

});

const btnremove = document.querySelector('#btn-remove');

btnremove.addEventListener('click', function () {
    const btn = document.querySelector('#btn-Add')
    btn.innerHTML = "+Add Friend"

    const followers = document.querySelector('#followers')
    followers.innerHTML = "998"

    
   
});

////////////////////////////////////////////////////////////
// toggle darkmode 
     const click =   document.getElementById('toggleA')
     
          flag =1;
          click.addEventListener('click', function(){
            const boll = document.getElementById('darkmode')
            if(flag == 1){
                click.style.justifyContent ="right"
                click.style.border = " 3px solid white"
                boll.style.backgroundColor = "white"
                document.body.style.backgroundColor = "#212121"
                document.body.style.color = "#fff"
                
                
                flag = 0
            }
            else{
                click.style.justifyContent = "left"
                click.style.border = " 3px solid black"
                boll.style.backgroundColor = "black"
                document.body.style.backgroundColor = "#fff"
                document.body.style.color = "#000"
                flag = 1;
            }
        })
