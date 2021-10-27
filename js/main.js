/* navbar menu */

var navBar = document.querySelector(".nav-list");
var close = document.getElementById("close");
var menubar = document.querySelector(".nav-bars");
var nav = document.querySelector("nav")
var sticky = nav.offsetTop;

menubar.addEventListener("click",function(){
    // navBar.style.width = "200px";
    // navBar.style.display = "block";
    navBar.style.transform = "scaleX(1)";
})

close.addEventListener("click",function(){
    // navBar.style.width = "0";
    // navBar.style.display = "none";
    navBar.style.transform = "scaleX(0)";
})

/* sticky navbar */
window.onscroll = function(){
    scroll();
}

function scroll(){
    if(window.scrollY >= sticky){
        document.body.paddingTop = nav.offsetHeight;
        nav.classList.add("sticky");
    }else{
        document.body.paddingTop = "0";
        nav.classList.remove("sticky");
    }
}

/*  animated counter */

let counters = document.querySelectorAll(".counter");
let speed = 500;


for(let counter of counters){
     function updateCount(){
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;

        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else{
            counter.innerText = target;
        }
    }
   updateCount();
}

/* gallery */

let previewImage = document.getElementById("preview");
let closeBtn = document.querySelector(".gallery-preview i");
let imageText = document.querySelector(".image-text");
let previewContainer = document.querySelector(".gallery-preview");

function gallery(imgs){
    previewImage.src = imgs.src;
    imageText.textContent = imgs.alt;
    previewContainer.style.display = "block";
    
}

closeBtn.addEventListener("click",function(){
    previewContainer.style.display = "none";
})

/* hide place holder on focus and show on blur */

let inpText = document.getElementById("text");
let inpEmail = document.getElementById("email");
let txtArea = document.getElementById("txt-area");
let valText = inpText.getAttribute("placeholder");
let valEmail = inpEmail.getAttribute("placeholder");
let valArea = txtArea.getAttribute("placeholder");
let inp = document.querySelectorAll(".text");

for(let i = 0; i < inp.length; i++){
    inp[i].onfocus = function(){
        this.setAttribute("placeholder", "");
    }
    
   
}
inpText.onblur = function (){
    this.setAttribute("placeholder", valText)
}

inpEmail.onblur = function (){
    this.setAttribute("placeholder", valEmail)
}

txtArea.onblur = function (){
    this.setAttribute("placeholder", valArea)
}
