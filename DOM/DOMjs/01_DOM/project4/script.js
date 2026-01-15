    const btnbulb = document.querySelector('#btn-bulb')

     var flag = 0;

    btnbulb.addEventListener('click', function(){
    const Bulb = document.getElementById('Bulb')

    
    if(flag == 0){
        Bulb.style.backgroundColor = 'yellow'
        Bulb.style.border = 'none'
        flag = 1;

    } else{
        Bulb.style.backgroundColor = 'transparent'
                Bulb.style.border = '2px solid black'

        flag = 0;
        // Bulb.style.bor 
    }

// bina logic ke (classList.toggle) se phle scc add krni pdti h
    // Bulb.classList.toggle('light-yellow')

    })




