var btn = document.querySelector(".btn-scroll");
window.addEventListener("scroll" , function(){
    console.log(window.scrollY);
    if(scrollY > 1000 ){
        btn.classList.remove("hidden")
    }else{
        scrollY < 1000 (btn.classList.add("hidden"))
    }
})