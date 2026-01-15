let marks = [23,45,65,76,78,98];
let sum = 0;

// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
//     // console.log(sum);
    
// }

for(let val of marks){
    sum += val;
}
let averageMarks = sum/marks.length;
console.log(` average marks of the class ${averageMarks}`);
