let BurgerMenu=document.querySelector(".burger-menu")

BurgerMenu.addEventListener("click",e=>{
    document.querySelector("header nav").classList.toggle("active")
})