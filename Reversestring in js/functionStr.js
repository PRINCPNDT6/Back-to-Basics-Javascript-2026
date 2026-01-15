function reverseString(str){

    let rev = "";
     for( let i = str.length-1; i >= 0; i--){
        rev +=  str[i];
     }

     return rev;
}

  const Rev = reverseString("hello world")
  console.log(Rev);
  


 
 //  function greet(name) {
    //   return "Hello " + name;
    // }
    // console.log(greet("Prince"));
    
    
     function Id(name,roll) {
      this.name = name;
      this.roll = roll;
      this.course = "BCA"
        }
    const StudentOne = new Id("Prince","317");
    const StudentTwo = new Id("Sharma", "379");

    console.log(StudentOne);
    console.log(StudentTwo);
    
  
    
    console.log(typeof (null));
    console.log(typeof (Number));
    console.log(typeof (String));
    console.log(typeof (Symbol));
    console.log(typeof (Boolean));
    console.log(typeof (BigInt));
    console.log(typeof (undefined));
    
    
    //  console.log(typeof ("true"));
    //  console.log(typeof (0));
    //  console.log(typeof (true));
    