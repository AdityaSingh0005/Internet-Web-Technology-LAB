// ==========================
// Typing Animation
// ==========================


const typingText = document.getElementById("typing");


const roles = [

    "MCA Student",
    "Data Analyst Aspirant",
    "Web Developer",
    "Python Programmer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentRole = roles[roleIndex];


    if(!deleting){


        typingText.textContent =
        currentRole.substring(0,charIndex+1);


        charIndex++;


        if(charIndex === currentRole.length){


            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }

    else{


        typingText.textContent =
        currentRole.substring(0,charIndex-1);


        charIndex--;


        if(charIndex === 0){


            deleting = false;


            roleIndex++;


            if(roleIndex === roles.length){

                roleIndex = 0;

            }


        }


    }


    setTimeout(typeEffect,100);

}


typeEffect();








// ==========================
// Scroll Reveal Animation
// ==========================


const sections = document.querySelectorAll(".section");



function revealOnScroll(){


    sections.forEach(section=>{


        let position =
        section.getBoundingClientRect().top;


        let screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            section.classList.add("show");


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();







// ==========================
// Navbar Background Change
// ==========================


const header =
document.querySelector("header");



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







// ==========================
// Auto Current Year Footer
// ==========================


const footer =
document.querySelector("footer p");



let year =
new Date().getFullYear();



footer.innerHTML =
`© ${year} Aditya Singh | Portfolio Website`;

// ==========================
// Mobile Menu
// ==========================


const menuIcon =
document.getElementById("menu-icon");


const navLinks =
document.getElementById("nav-links");



menuIcon.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});







// ==========================
// Dark Light Mode
// ==========================


const themeBtn =
document.getElementById("theme-btn");



themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");



if(document.body.classList.contains("light-mode")){


themeBtn.innerHTML="☀️";


}

else{


themeBtn.innerHTML="🌙";


}


});