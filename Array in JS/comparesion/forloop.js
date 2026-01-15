// collections of item or data 
// array is a linear datastructure which store similar type of data 

let marks = [89,67,76,89,87];
marks[0] = 11;
console.log(marks);

for(let num of marks){
    console.log(num);
    
}
console.log(marks.length+1);

let names = ["efef","erfer","prince","rerer",'fefefe']
console.log(names);
names[1] = "ppp"
console.log(names);
for(let name of names){
    console.log(name.toUpperCase());
    
}

 let total = 0;
//  let element;
for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    // let element = marks[i];
    // console.log(element);
    // total += element; 
    
    
}

// for(let element of marks){
//     total += element;
// }
console.log(total);

