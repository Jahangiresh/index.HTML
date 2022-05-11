let elements=document.getElementsByClassName("dragarea")
let h=document.querySelector("h1")



for(let index=0;index<elements.length;index++){
    elements[index].addEventListener('dragover',(e)=>{
        e.preventDefault()
     
    })
    elements[index].addEventListener('dragenter',(e)=>{
        e.target.style.backgroundColor='blue'
    })
    elements[index].addEventListener('dragleave',(e)=>{
        e.target.style.backgroundColor='red'
    })
    elements[index].addEventListener('drop', (e)=>{
      
        e.target.appendChild(h);

    })
}