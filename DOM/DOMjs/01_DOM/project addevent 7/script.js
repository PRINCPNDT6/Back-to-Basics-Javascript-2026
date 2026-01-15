const btn =  document.querySelectorAll('.btn-purchase')
btn.forEach(function(button){
button.addEventListener('click', function(e){
      const box = document.getElementById('congratulations-box')
      const imgadd = document.getElementById('addimg')
      const coinimg = document.getElementById('congimg')
      const token = document.getElementById('coin')
      const h3 = document.getElementById('h3-false')
      let coin = 2300;
      let price = 500;
 
  
      if(e.target.id == 'btn-purchase'){
       
            box.style.display = "flex"
            imgadd.src = "WhatsApp Image 2025-07-08 at 15.17.00_923f584a.jpg"
            token.innerHTML = `${coin-price}`
           

        
      }

      if(e.target.id == 'btn-purchase1'){
         let  coin = 1800
        box.style.display = "flex"
            token.innerHTML = `${coin-price}`
      }
      if(e.target.id == 'btn-purchase2'){
        let coin = 1300
        box.style.display = "flex"
            token.innerHTML = `${coin-price}`
         
      }
      if(e.target.id == 'btn-purchase3'){
        let coin = 800

        box.style.display = "flex"
        imgadd.src = "WhatsApp Image 2025-07-08 at 15.17.00_923f584a.jpg"
            token.innerHTML = `${coin-price}`
      }



 
     
     
})
});

 
 

const ok = document.getElementById('ok')
ok.addEventListener('click', function(){
  const box = document.getElementById('congratulations-box')
  box.style.display = "none"

 


});
const share = document.getElementById('share')
share.addEventListener('click', function(){
  const box = document.getElementById('congratulations-box')
//   box.textContent = ""

});




