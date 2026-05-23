
//   agr function abc se phle let b = 22 kru to abc() call hua to log(b) line run hui but kabhi b define hi ni hua islie error but agr let b = 22 phle ho memory me to ab call krne pr log(b) find kr lega 
// log ke  baad agr let or const declare hue to TDZ me hi ranhege 
// or log ke phle hue to TDZ se bahar mtlb log hote hi
// TDZ ka matlab: exist karte hain, par use nahi kar sakte. 

let a = 10;
 function abc(){ 
    // var a = 10
    console.log(a);
}

// is se upr ka override ho gya 

// let b = 10  // ye line abc() call se phle memory me hai or log hote hi TDZ se bahar 
abc()// ye pahle hi call ho gya or is function ke andar sb execute hogyaa  let define bhi nahi hua 
// yaha let b log se phle hai but abc() call hua or log ko pahle run kr dia  fir let b wali line memory me aay or TDZ me hi rahi 
let b = 10 // TDZ // agar yaha likhoge to abc() to call hogya or log(b) define nahi hua tha is lie error 

function abc(){
    //  let b = 11
    console.log(b); // ye line abc() call hote hi run hui or b define hi  ni hua 
}
abc()