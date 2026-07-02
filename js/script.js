const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){
    slides[current].classList.remove("active");
    current++;
    if(current >= slides.length){
        current = 0;
    }
    slides[current].classList.add("active");
}

if(slides.length > 0){
    setInterval(nextSlide,3000);
}

const gallery = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if(gallery.length > 0 && lightbox && lightboxImg){
    gallery.forEach(img=>{
        img.addEventListener("click",()=>{
            lightbox.style.display="flex";
            lightboxImg.src=img.src;
        });
    });

    if(closeBtn){
        closeBtn.onclick=()=>{
            lightbox.style.display="none";
        }
    }

    lightbox.onclick=()=>{
        lightbox.style.display="none";
    }
}
//================ BACK TO TOP =================

const topBtn=document.getElementById("topBtn");

if(topBtn){
    window.onscroll=function(){
        if(document.documentElement.scrollTop>300){
            topBtn.style.display="block";
        }
        else{
            topBtn.style.display="none";
        }
    }

    topBtn.onclick=function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
}
//================ MOBILE MENU =================

const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

if(menuToggle && nav){
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener("click",()=>{
        nav.classList.toggle("active");
        if(menuIcon){
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        }
    });

    // close menu when a nav link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link=>{
        link.addEventListener('click', ()=>{
            nav.classList.remove('active');
            if(menuIcon){
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            }
        });
    });

    // close menu when clicking outside
    document.addEventListener('click', (e)=>{
        if(nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)){
            nav.classList.remove('active');
            if(menuIcon){
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            }
        }
    });
}
//================ NAVBAR SCROLL =================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>100){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});