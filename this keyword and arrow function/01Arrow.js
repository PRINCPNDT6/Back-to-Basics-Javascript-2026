// // const { use } = require("react");
// // this apne parent ka currnt context leta hai agr obj me hai to node se {} ye 
// // or agr function me hai to bhi parent top level node me this {} ye hi 
// // or agr obj me fncs ke andr this hai to fncs ka parent obj hoga or ye obj ke contest ko acess krega  
// const user = {
//     username: ' prince',
//     rollNo: 317,
//     // is scope me value access krne k lie this ka use 
//     wellcomeMessage: function abc(){
//         // this hai current context ki value acess krne ke lie 
//         console.log(`${this.username}: welcome to website`); 
//         // console.log(this.wellcomeMessage);// ye dono same hi hai
//         // console.log(user.wellcomeMessage);//  ye dono same hi hai
        
//         // console.log(this); // ye apne parent ka current context hold krta hai or iske andr hi abc() fncs aayega but iske andr ki value nahi
        
        
//     }
// }

// user.wellcomeMessage()
// // user.username = 'prince sharma' // yaha context change kr dia 
// // user.wellcomeMessage()

// // console.log(this); // ye node envirnment me hai abhi koi global context nahi hai so {} empty

// function abc(){
//     console.log(this); // isne yaha node ko acess kia global node 
    
// }
// // abc()

let obj1 = {
     
    ths:function  (){
// function me this global ka this use krta hai 
    console.log(this); // isme global context(obj1) or sirf ths function 
    
}
}
obj1.ths()
console.log(obj1);


// let obj2 = {
//     // obj me this apna this nahi bnata ye parent scope ka this leta hai
//     // agr ye node me hai to {}, agr browse me hua to window
//     name:this, // ye yaha {} top-level-node but browse me window
//     this: ' name'
// }

// console.log(obj2.this);
// console.log(obj2);
// // console.log(this);


function abcd(){
    let b = {
        name: this // ye yaha parent (ka this use krega) ke context ko acess krega 
    }
    console.log(b.name); // is me sirf function ka context 
    console.log(b); // yaha obj me name hoga but this ki vjah se function ka context bhi aayega name ki valu me
    
}
// console.log(b.name); cause of block
// console.log(b);

abcd()

