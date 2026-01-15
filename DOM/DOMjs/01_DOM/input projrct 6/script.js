       const btn = document.getElementById('loginbtn')


        btn.addEventListener('click', function(){
            const name = document.getElementById('nameinput')
            const nameinput = name.value;
            name.value= ""
            const password = document.getElementById('password')
            const nonepass = password.value;
            password.value = ""

            ///// 
            // profile name select krne k lioe 

           const h2Name = document.getElementById('h2-name')
           h2Name.textContent = nameinput;
        })

/////////////////////////////
const editlogo = document.getElementById('edit-logo')
const editbox = document.getElementById('edit-box')
const loginbtn = document.getElementById('loginbtn')

editlogo.addEventListener('click', function(){
    editbox.style.display = "flex"

    ////
    // profile name select krne k lie 
      const h2Name = document.getElementById('h2-name')
    h2Name.textContent = " "
    //////

})
loginbtn.addEventListener('click', function(){
    editbox.style.display = "none"
})



////////////////
// front page include 

        
const nameF = document.getElementById('nameF')
const passwordF = document.getElementById('passwordF')
const loginbtnF = document.getElementById('loginbtnF')

loginbtnF.addEventListener('click', function(){
const nameF = document.getElementById('nameF')
const name = nameF.value;
nameF.value =""

const passwordF = document.getElementById('passwordF')
const password = passwordF.value;
passwordF.value =""

const emailF = document.getElementById('emailF')
const email = emailF.value;
emailF.value =""


           const h2Name = document.getElementById('h2-name')
           h2Name.textContent = name;


})