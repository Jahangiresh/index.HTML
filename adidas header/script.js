let scroll=document.querySelector(".my-header")
let cover=document.querySelector(".my-cover")
let bag=document.querySelector("#bag")
let bagdiv=document.querySelector(".bagdiv")
let hovermen=document.querySelector("#hovermen")
let men=document.querySelector("#men")
let women=document.querySelector("#women")
let kids=document.querySelector("#kids")
let sale=document.querySelector("#sale")
let strip=document.querySelector("#strip")
let arrivals=document.querySelector("#arrivals")
let trendings=document.querySelector("#trendings")
let imagebox2=document.querySelector("#imageboxARRIV")
let imageboxTREND=document.querySelector("#imageboxTREND")
let imageboxLast=document.querySelector("#imageboxLast")

trendings.addEventListener('click',function(){
   trendings.style.borderBottom='4px solid black'
   trendings.style.fontWeight='700'
   arrivals.style.borderBottom='none'
   arrivals.style.fontWeight='normal'
   imagebox2.style.opacity=0
   imageboxTREND.style.marginLeft='0'
   imageboxLast.style.marginTop='200px'
})
arrivals.addEventListener('click',function(){
   arrivals.style.borderBottom='4px solid black'
   arrivals.style.fontWeight='700'
   trendings.style.borderBottom='none'
   trendings.style.fontWeight='normal'
   imageboxTREND.style.marginLeft='100%'
   imagebox2.style.opacity=1
   imageboxLast.style.marginTop='-1000px'
})

document.addEventListener('scroll', function(){
if(window.scrollY>100)
   scroll.style.marginTop='-200px'
   else
   scroll.style.marginTop='0px'
})
bag.addEventListener('mouseover',function(){
bagdiv.style.opacity=1
})
bag.addEventListener('mouseout',function(){
    bagdiv.style.opacity=0
    })



    
    men.addEventListener('mouseover',function(){
      hovermen.style.opacity=1
     
   })


   scroll.addEventListener('click',function(){
      hovermen.style.opacity=0
   })

   women.addEventListener('mouseover',function(){
      hovermen.style.opacity=1
     
   })


   scroll.addEventListener('click',function(){
      hovermen.style.opacity=0
   })
   kids.addEventListener('mouseover',function(){
      hovermen.style.opacity=1
     
   })


   scroll.addEventListener('click',function(){
      hovermen.style.opacity=0
   })
   sale.addEventListener('mouseover',function(){
      hovermen.style.opacity=1
     
   })


   scroll.addEventListener('click',function(){
      hovermen.style.opacity=0
   })
   strip.addEventListener('mouseover',function(){
      hovermen.style.opacity=1
     
   })


   scroll.addEventListener('click',function(){
      hovermen.style.opacity=0
   })
 
  
   
   
