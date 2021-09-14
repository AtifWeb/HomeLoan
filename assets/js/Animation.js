let TotalWidth=0;
let AllBoxes=document.querySelectorAll(".slider-item-wrapper");
let Count=0
let SliderReel=document.querySelector(".sliding-reel")
let animationStart=false

// calculation TotalWidth

AllBoxes.forEach(EachBox=>{
    TotalWidth=TotalWidth+EachBox.offsetWidth
})



const AnimationSlider=()=>{
    Count++
if(Count<TotalWidth){
    SliderReel.style.transform=`translateX(-${Count}px)`
}else{
    Count=0;
}
}



window.addEventListener("scroll",()=>{
    if(window.scrollY>3018&&animationStart==false){
        setInterval(() => {
            AnimationSlider()
        }, 40);
    animationStart=true        
    }
})
