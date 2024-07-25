// btn js
let btnEl = document.getElementById("btn-scroll");
onscroll = function(){
    if (scrollY >= 350){
        btnEl.style.display = "block"
    }else{
        btnEl.style.display = "none"
    }
}
btnEl.onclick = function(){
    scroll({
        top : 0,
        behavior: "smooth"
    })
};


// 2 scroll width top
let el = document.querySelector(".scroller");
let height =document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , () =>{
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`
});