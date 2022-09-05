
//scroll effect

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav-scroll',window.scrollY > 0)
})

///dark mode 

let darkbtn = document.querySelector(".dark-mode");

darkbtn.onclick = function(){

    if(darkbtn.classList.contains("uil-moon")){
        darkbtn.classList.remove("uil-moon");
        darkbtn.classList.add("uil-sun");
    }
    else{
        darkbtn.classList.add("uil-moon");
        darkbtn.classList.remove("uil-sun");
    }

    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}





// menu toggle

let container = document.querySelector(".contain-mid");
let btn = document.querySelector(".menu-btn");
function menuOpen(){
    container.classList.toggle("show");

    if(btn.classList.contains("uil-bars")){
        btn.classList.remove("uil-bars");
        btn.classList.add("uil-times");
    }
    else{
        btn.classList.add("uil-bars");
        btn.classList.remove("uil-times");
    }
}