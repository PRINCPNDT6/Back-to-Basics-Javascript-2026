function student(username, rollNo){

    this.username = username;
    this.rollNo = rollNo;
    course = "BCA";
    section = "B"
    collegeName = "BIT MEERUT";

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const studentOne = new student("Prince Sharma", 317);
const studentTwo = new student("Riya Dubey", 379);

// new keyword new empty memory create krta hai 

console.log(studentOne);
console.log(studentTwo);
console.log(student);
// console.log(studentOne.constructor );
console.log(studentOne instanceof student);
console.log(studentTwo instanceof student);  // check krta hai ki studentTwo student se lia hia to => true






// student();