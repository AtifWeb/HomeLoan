let Buttons=document.querySelectorAll(".first-section .buttons-wrapper button");



Buttons.forEach(EachButton=>{
    EachButton.addEventListener("click",(e)=>{
        Buttons.forEach(EachButton=>{
           EachButton.classList.remove("active")
        })


        e.target.classList.add("active")
        
    })
})


