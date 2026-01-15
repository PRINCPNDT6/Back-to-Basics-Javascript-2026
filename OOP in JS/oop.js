const user = {
    username: "prince",
    loginCount: 5,
    signedIn: true,

    getUserdtails: function(){
        console.log("got details from User");
        console.log(`User name: ${this.username}`);
        console.log(this); // object details 
        
        
        
    }

}

console.log(user.username);
console.log(user.getUserdtails());
console.log(this); // window

