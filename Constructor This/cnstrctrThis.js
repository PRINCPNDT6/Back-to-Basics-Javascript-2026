// jab kabhi same property ke bahut sare element bana ne  ho to hm (this. Or cnstrctr function )use krte hai 

function StrOfBiscuit(){
    this.height = 12;
    this.weight = 23;
    this.color = "brown";
    this.taste = "sugary" ;
}

new StrOfBiscuit();

let bis1 = new StrOfBiscuit();
let bis2 = new StrOfBiscuit();
let bis3 = new StrOfBiscuit();

// console.log( bis1);
// console.log( bis2);
// console.log( bis3);

// example of constructor 

function constructor(){
      this.height = 12;
    this.weight = 23;
    this.color = "brown";
    this.taste = "sugary";
}

new constructor();

let prdct1 = new constructor();
let prdct3 = new constructor();
let prdct2 = new constructor();

// console.log(prdct1);
// console.log(prdct3);
// console.log(prdct2);

// for programing 

function bttnbnao(color){
    
    this.color = color;
    this.radius = 3;
    this.icon = false;
    this.height = 55;
    this.hover =  false;

}

 
let bttn1 = new bttnbnao("red");
let bttn2 = new bttnbnao("yellow");
let bttn3 = new bttnbnao("green");

console.log(bttn1);
console.log(bttn2);
console.log(bttn3);



