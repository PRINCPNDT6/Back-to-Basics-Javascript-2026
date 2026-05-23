// // //  normal function
// // // let obj = {
// // //     fncs:function(){
// // //         console.log(this);
        
// // //     } 
// // // }

// // // console.log(obj);
// // // console.log(obj.fncs);
// // // console.log(obj.fncs());//  ye yahan fncs print krega 
// // //<<<<<<<<<<<<<<<<<<<<<<<<<
// // // >>>>>>>>>>>>Arrow function

// // let obj = {
//         name:'prince',
// //     fncs: () =>{
// //         console.log(this); // ye this = lexical mtlb obj ka this use krega or obj node se lga {} empty 
// //         console.log(this.name); // ye this = lexical mtlb obj ka this use krega or obj node se lga {} empty 
        
// //     } 
// // }

// // console.log(obj);
// // console.log(obj.fncs);
// // console.log(obj.fncs()); // ya yahan khud ka this nahi hai ye obja ka lega or obj ke pass bhi khud ka ni hai ot islie ye node se lga {}
// // ????????????????????????????????????????????????
// username = 'prince from global '
//    let one = () =>{
//     username = "prince"
//       let two = () =>{
//         console.log(`${this.username} arrow to global use this`); // ye this lega lexical ka mtlb apne ass pass wale ka to isne one function ka this use kia oe one bhi arrow to use node ka jo emptu hai undefined
        
//     }
//     two()
    
// }
// one()

// let obj1 = {
//     name: 'prince',
//     fncs: () =>{
//         console.log(this.name);
//         console.log(this);
        
//     }
// }
//  console.log(obj1.fncs());
 

let obj = {
    name: "Prince",
    normalFn: function() {
        const arrowInside = () => {
            console.log(this.name); // ?
        }
        arrowInside();
    }
}

obj.normalFn();

let obj3 = {
    normalFn: function() {
        const arrowFn = () => {
            console.log(this); // this = normalFn ka this = obj
        }
        arrowFn();
    }
}
obj3.normalFn();


//3️⃣ Lexical scope aur parent ka analysis

// arrowFn define hua object literal ke andar

// Object literal apna this nahi banata

// Isliye lexical this = surrounding scope jahan object define hua

// Node.js top-level file me → surrounding scope = {} (module.exports)

// Browser top-level → surrounding scope = window

// Parent scope for variables (lexical scope)

// achha to to normal fncs ka this hai or isne obj ko call kia or arrow ke pass hota ni 