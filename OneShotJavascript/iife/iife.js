let ans = (function(){
let privateval = 12;

    return {
        getter: function(){
            console.log(privateval); 
        },

        setter: function(){
            privateval = val;
        }

    }

    console.log(ans.setter);
    
})()