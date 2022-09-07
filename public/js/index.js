
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

//register toggle
let reg = document.querySelector(".register");
let btnr = document.querySelector(".nav-btn");

btnr.addEventListener("click",()=>{
    reg.classList.toggle("regShow");

});

let log = document.getElementById("login");
let sign = document.getElementById("signup");
let btn_id = document.getElementById("btn-id");

let btn_l = document.querySelector(".log-b");
let btn_s = document.querySelector(".sign-b");

btn_l.addEventListener("click",()=>{
    sign.style.left = "100%";
    log.style.left = "0%";
    btn_id.style.left = "0%";
});
btn_s.addEventListener("click",()=>{
    sign.style.left = "-100%";
    log.style.left = "-110%";
    btn_id.style.left = "47%";
});

// eye

let eye = document.querySelector(".eye-i");
let pass_f = document.querySelector(".pass-field");
eye.addEventListener("click",()=>{

    if(eye.classList.contains("uil-eye")){
        pass_f.type = "password";
        eye.classList.remove("uil-eye");
        eye.classList.add("uil-eye-slash");
    }
    else{
        pass_f.type = "text";
        eye.classList.remove("uil-eye-slash");
        eye.classList.add("uil-eye");
    }
});
let eye1 = document.querySelector(".eye-i1");
let pass_f1 = document.querySelector(".pass-field1");
eye1.addEventListener("click",()=>{

    if(eye1.classList.contains("uil-eye")){
        pass_f1.type = "password";
        eye1.classList.remove("uil-eye");
        eye1.classList.add("uil-eye-slash");
    }
    else{
        pass_f1.type = "text";
        eye1.classList.remove("uil-eye-slash");
        eye1.classList.add("uil-eye");
    }
});


//email validation check

function valid(){
    let email = document.getElementById("email").value;
    let tick = document.getElementById("tick");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        tick.innerHTML = `<i class="uil uil-check"></i>`;
        tick.style.color="green";
    }
    else{
        tick.innerHTML = `<i class="uil uil-times"></i>`;
        tick.style.color="red";
    }
    if(email == ""){
        tick.innerHTML = "";

    }
}