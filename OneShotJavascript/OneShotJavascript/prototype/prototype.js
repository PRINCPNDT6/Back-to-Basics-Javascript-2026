// prototype ek aeisa method hai jiski help se hm bahut saari property ka use kr skte hai jo hmne create bhi nahi ki h like =  .length,.hasOwnProperty etc..

let obj = {
    name: "prince sharma",
    course: "BCA,"
}

console.log(obj);
console.log(obj.name);

// delete obj.name;

obj.course = "BCA 2nd Year";

console.log(obj);
console.log(obj.__proto__);
console.log(obj.hasOwnProperty(`name`));
