let ans = (function(){
    let privatevar = 10;

    return {
        getter: function(){
            console.log(privatevar);
            
        },
        setter: function(publicvar){
            privatevar: publicvar;
        }
    }

})()