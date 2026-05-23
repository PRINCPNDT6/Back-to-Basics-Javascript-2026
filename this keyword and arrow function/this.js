// normal  function me this = global hota hai to vo global me  undeclared variable ko this.variable se acess krleta hai
// arrow me this = lexicalscope = {} yaha thiss.variable work ni krega so we used global.variable
// or node me to-level-node me this = {} 

const user = {
    username: "prince",
    price: 999,

    wellcomemessage: function(){
        console.log(`${user.username} , wellome to website`);
        
    }

}
// console.log(user.wellcomemessage()); // is se undefine q ara hai 
// user.wellcomemessage()

// console.log(user.wellcomemessage);
// console.log(user);

user.username="prince sharma"
user.wellcomemessage

// console.log(user.this); // user me this name ki koi property exist nahi krti
// console.log(user);


//   const name =  function chai(){
//      username = "prince"
//    console.log(username);
   
//     price = 999

//  }

//   console.log(chai());
// chai()

//''''''''''''''''''''
//   console.log(name);

//   const name ={
//      username :"prince",
// //    console.log(username);
   
//     price: 999,

//  }

 //   console.log(name);
 //'''''''''''''''''''''''''''

//   console.log(chai());
userName = 'prince'
// chai()
// userName = 'prince' // ye yaha TDZ me 
// function chai(){
//       let   username = "prince"
//        console.log(this.userName);//  ye global me userName fined krega
//        console.log(username);
    //    console.log(this);
       
       
        // price = 999
    
    //  } 
    //''''''''''''''''''''''''''''
    //   console.log(chai());
    // chai() // agr fncs variable me ho to he hoisting ki ko follow krega

// const chai = function(){
//   let username = "prince sharma"
//   console.log(username);
//   console.log(this.username);
    
// }

// chai()

// ====== ARROW FUNCTION ======
// iska bhi khud ka this nahi hota 
// ye apne lexical ka this use krta hai or agr agr iska lexical node hai to node me this = {} hota hai islie this.x = undifined 
// agr ye obj me fncs ke andr hai but obj bhi khud ka this nahi bnata vo bhi node ka hi lega parent se 

// const chai =  () => {
//   let username = "prince sharma"
//   console.log(username);
//   console.log(this.username); // undefined rhega jb tk global me username declare nahi hoga
    
//   console.log(this); // fncs global ka context => {} 
    
// }

// chai()

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const addtwo = (num1,num2) =>{
//   return num1+num2;
// }
// console.log(addtwo(10,20));

userName = 'prince'
const User =() => {
 let username = "prince"
  
 console.log(this.userName); // arrow fncs me iska this nahi hota {} isme username nahi h 
 console.log(global.userName); 
}
User()
//??????????????????????????????????????????
//   const chai = () => {
//  let    username = "prince"
  
// }
// chai()
// console.log(this.username);
// console.log(chai);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const addTwo = () => {
//   return;
// }
// console.log(addTwo());
 

// const addnum = (num1,num2) => {
//   return num1+num2;
// }
// console.log(addnum(10,20));

// const addnum1 = (num1,num2) =>
// //   return num1+num2;  if we use parenthethis 

//   // (num1+num2)
//   // ==== object ==== 
//   ({ username: "prince"})

// // console.log(addnum1(10,20));
// console.log(addnum1(10,20));

//.............................

// (function chai(){
//   // console.log(`DB CONNCTED`);
  
// })();
// ( chai = () => {
//   // console.log(`DB CONNCTED TWO`);
  
// })();
// ( () => {
//   // console.log(`DB CONNCTED THREE`);
  
// })();
 
// const  tea = function() {
//   console.log(`DB CONNCTED  TEA`);
  
// }();

// named I
 
 
// (     code =  (name) => {
//   // console.log(`DB CONNCTED  TEA ${name}`);
  
// })(`prince`)
 