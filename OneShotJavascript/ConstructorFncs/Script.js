// nirmal function jisme this ka use hota hai and call krte time new keyword ka sue hota hai

function biscuitBanao(color, companyName){
    this.color = color;
    this.height = 10;
    this.width = 10;
    this.companyName = companyName;
    borderradius = 7;


}

let parle = new biscuitBanao("brown","parle");
let goodday = new biscuitBanao("red","goodday");
let T20 = new biscuitBanao("yellow","T20");
let Tiger = new biscuitBanao("green","tiger");

// let abcd = function(){}

// console.log(typeof(abcd));

//  function ka typeof = function 
//  object ka typeof = object
//  array ka typeof = array