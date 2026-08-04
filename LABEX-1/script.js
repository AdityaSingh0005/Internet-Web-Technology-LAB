// =========================================
// TYPING ANIMATION
// =========================================


const typingElement = document.getElementById("typing");


const words = [

    "Web Developer",

    "Python Programmer",

    "Data Analytics Enthusiast",

    "AI Project Developer"

];


let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;



function typeEffect(){


    let currentWord = words[wordIndex];


    if(isDeleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

    }

    else{

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

    }



    if(!isDeleting && charIndex === currentWord.length){

        isDeleting = true;

        setTimeout(typeEffect,1500);

    }


    else if(isDeleting && charIndex === 0){

        isDeleting=false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex=0;

        }

        setTimeout(typeEffect,500);

    }


    else{

        setTimeout(typeEffect,100);

    }


}



typeEffect();






// =========================================
// MOBILE MENU
// =========================================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});





// Close menu after clicking link


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});






// =========================================
// NAVBAR BACKGROUND ON SCROLL
// =========================================


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(5,8,22,0.95)";


    }


    else{


        header.style.background =
        "rgba(5,8,22,0.75)";


    }



});





// =========================================
// ACTIVE NAV LINK
// =========================================



const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let sectionTop =
        section.offsetTop - 150;


        let sectionHeight =
        section.clientHeight;



        if(
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")
        === "#" + current){


            link.classList.add("active");


        }


    });


});

/* =========================================
        DARK / LIGHT MODE
========================================= */


const themeButton = document.getElementById("theme-toggle");


let darkMode = true;



themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    darkMode = !darkMode;



    if(darkMode){


        themeButton.innerHTML =
        '<i class="fas fa-moon"></i>';


    }

    else{


        themeButton.innerHTML =
        '<i class="fas fa-sun"></i>';


    }


});





/* =========================================
        SCROLL REVEAL ANIMATION
========================================= */


const revealElements = document.querySelectorAll(

".section, .skill-card, .project-card, .subject-card, .certificate-card, .contact-card"

);



function revealOnScroll(){


    revealElements.forEach(element=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect().top;


        let revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){


            element.classList.add("show");


        }


    });


}



window.addEventListener(

"scroll",

revealOnScroll

);



revealOnScroll();






/* =========================================
        PROJECT IMAGE EFFECT
========================================= */


const projectImages =
document.querySelectorAll(".project-card img, .featured-image img");



projectImages.forEach(image=>{


    image.addEventListener("mouseenter",()=>{


        image.style.transform =
        "scale(1.05)";


    });



    image.addEventListener("mouseleave",()=>{


        image.style.transform =
        "scale(1)";


    });



});






/* =========================================
        BUTTON RIPPLE EFFECT
========================================= */


const buttons =
document.querySelectorAll(".btn, .btn-outline");



buttons.forEach(button=>{


    button.addEventListener("click",(e)=>{


        let ripple =
        document.createElement("span");


        ripple.classList.add("ripple");


        button.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);


    });


});







/* =========================================
        IMAGE LOAD ANIMATION
========================================= */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.addEventListener("load",()=>{


        img.classList.add("loaded");


    });


});






/* =========================================
        AUTO YEAR FOOTER
========================================= */


const year =
new Date().getFullYear();



const footerYear =
document.querySelector(".footer-year");



if(footerYear){


    footerYear.textContent = year;


}





/* =========================================
        SCROLL TO TOP BUTTON
========================================= */


const topButton =
document.createElement("button");


topButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';



topButton.classList.add("top-button");



document.body.appendChild(topButton);




window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.classList.add("active");


    }

    else{


        topButton.classList.remove("active");


    }


});




topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/total)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});