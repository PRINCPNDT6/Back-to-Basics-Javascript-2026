function SetUsername(username){
    this.username = username;
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}
const user = new createUser("prishu", "prishu@fb.com", "1234")
console.log(user);

