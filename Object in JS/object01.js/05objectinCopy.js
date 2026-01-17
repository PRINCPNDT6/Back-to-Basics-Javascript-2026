// let a = [1,2,3,4,5];

// reference value of a into b = a or b dono ki value ek hi hai kisi me bhi chnge kro dono me hoga like :

//   let b = a;

//   a.pop(); 
//   b.pop();
//   console.log(a); // [1,2,3]

//   console.log(b);  // [1,2,3]

//   copy value of a into b  = dono me apni value alg alg hogy  jisme chnge kroge sirf usme hi change honga 

// let b  = [...a];

//  a.pop(); 
//  b.pop();

//   console.log(a); // [1,2,3,4,]

//  console.log(b);  // [1,2,3,4,]



// let obj1 = {
//     name: "prince",
//     rollno: 317,
// }

// let obj2 = obj1

//  obj2 = {
//     name: "sharma",
//     rollno: 331,
// }
// obj2.name = "prince sharma";
// obj1.name = "krish"

// console.log(obj1);
// console.log(obj2); 


let obj3 = {
    name: "prince",
    rollno: 317,
}

let obj4 = {...obj3}

 obj3.name = "prince sharma";

 obj4.name = "prince prince";

 console.log(obj3);
 console.log(obj4);
 
