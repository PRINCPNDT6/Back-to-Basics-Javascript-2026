// if else 

    // null undefined false 0 NaN '' "" ye sab false hote hai
    // baki sab true hote hai 
    // -1 bhi true hota hai
    // 1 bhi true hota hai
    // "prince" bhi true hota hai
    if( condition ){
        // jab condition true ho
    } else {
        // jab condition false ho
    }
    var a = 10;
    if( a > 10 ){   
        console.log("A is greater than 10");
    } else {
        console.log("A is not greater than 10");
    }
    // output: A is not greater than 10

    var a = 4;
    var b = 5;
    var c = 6;

    if( a>b){
      // contdition 1 true hai
      console.log("a is greater than b");
      
    }
    else if(b==c){
      // condition 2 true hai
        console.log("b is equal c");
    }
    // else if(b==c){
    //   // condition 3 true hai
    //     console.log("b is equal to c"); 
    // }
    else{
        // sab condition false hai
        console.log("all condition are false");
    }

    // false, 0, null, undifinde, "", NaN  ye sabhi false hote hai
    // baki sab true , -1, 1, "prince"

    // agar a = 11 hota to output hota A is greater than 10
    // agar a = 10 hota to output hota A is not greater than 10
    // agar a = -10 hota to output hota A is not greater than 10
    // agar a = 0 hota to output hota A is not greater than 10
    // agar a = "hello" hota to output hota A is not greater than 10
    // agar a = "" hota to output hota A is not greater than 10
    // agar a = null hota to output hota A is not greater than 10
    // agar a = undefined hota to output hota A is not greater than 10
    // agar a = NaN hota to output hota A is not greater than 10
    // agar a = true hota to output hota A is greater than 10
    // agar a = false hota to output hota A is not greater than 10