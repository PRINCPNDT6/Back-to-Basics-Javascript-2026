// function one(){
//     username = 'prince' // this = global
//     let two = () =>{
//         console.log(this.username); // this = lexical , mtl jahan two deifne hua or one() me define hua to yaha ka this lega or one ka this = global or undecalred variable = global
        
//     }
//     two()
// }

// one()



// username = 'prince'
// let obj  = {
//     username:'prince',
//     arw:() =>{
//         console.log(this.username);
        
//     }
// }

// console.log(obj.arw());

username = 'prince'
let arwfncs = ()=>{
    username = 'prince'
    console.log(this.username);
    
}

arwfncs()
