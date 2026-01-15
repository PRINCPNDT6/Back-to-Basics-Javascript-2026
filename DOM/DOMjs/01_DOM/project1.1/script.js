const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        
        // body.style.backgroundColor = "red" // is se all box select hote hai or sare box pr click krne pr backgroundColor = red 
        //or ye if else condition hr box ki id se target hai 
        if(e.target.id === 'red'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'green'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'purple'){
                body.style.backgroundColor = e.target.id;
            }
    });
});