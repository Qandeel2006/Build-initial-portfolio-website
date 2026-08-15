// ==============================
// Portfolio V1 JavaScript
// Developed with ❤️ by ChatGPT
// ==============================

// ------------------------------
// Typing Effect
// ------------------------------

const words = [
    "Data Science Student",
    "Aspiring Data Scientist",
    "Python Developer",
    "Power BI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


// ------------------------------
// Reveal Animation
// ------------------------------

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


// ------------------------------
// Mouse Glow
// ------------------------------

const glow = document.getElementById("cursor-glow");

if (glow) {

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

// ------------------------------
// Scroll Progress Bar
// ------------------------------

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const width = (scrollTop / height) * 100;

    progress.style.width = width + "%";

});


// ------------------------------
// Smooth Scroll
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ------------------------------
// Active Navbar
// ------------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ------------------------------
// Mobile Menu
// ------------------------------

const menu = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");
if(menu){
menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});
}

// ------------------------------
// Navbar Background
// ------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(10,10,20,.85)";

        navbar.style.boxShadow =
            "0 20px 60px rgba(0,0,0,.4)";

    }

    else {

        navbar.style.background =
            "rgba(255,255,255,.05)";

        navbar.style.boxShadow = "none";

    }

});


// ------------------------------
// Button Hover Glow
// ------------------------------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


// ------------------------------
// Floating Card
// ------------------------------

const card=document.querySelector(".profile-card");

document.addEventListener("mousemove",(e)=>{

    if(!card) return;

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    card.style.transform=

    `rotateY(${-x}deg) rotateX(${y}deg)`;

});


// ------------------------------
// Card Reset
// ------------------------------

document.addEventListener("mouseleave",()=>{

    if(card){

        card.style.transform="rotateX(0deg) rotateY(0deg)";

    }

});


// ------------------------------
// Console Welcome 😄
// ------------------------------

console.log("%cWelcome Qandeel 👋",
"color:#22d3ee;font-size:22px;font-weight:bold");

console.log("Portfolio Version 1 Loaded Successfully 🚀");
/* ==========================================
   VERSION 2 - ANIMATIONS
========================================== */


/* Counter Animation */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = target;

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



/* ==========================================
   Timeline Animation
========================================== */

const timelineCards = document.querySelectorAll(".timeline-card");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateX(0)";

}

});

},{

threshold:.3

});

timelineCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateX(80px)";

card.style.transition=".8s ease";

timelineObserver.observe(card);

});



/* ==========================================
   Skill Card Hover
========================================== */

const skillCards=document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(800px) rotateX(0deg) rotateY(0deg)";

});

});



/* ==========================================
   Stagger Reveal
========================================== */

const revealItems=document.querySelectorAll(

".glass-card,.stat-card,.timeline-item,.skill-card"

);

const staggerObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

},{

threshold:.2

});

revealItems.forEach((item,index)=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=

`.7s ease ${index*0.08}s`;

staggerObserver.observe(item);

});


/* ==========================================
   Navbar Active Glow
========================================== */

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(sec=>{

const top=sec.offsetTop-180;

if(scrollY>=top){

current=sec.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



/* ==========================================
   Floating Background Blobs
========================================== */

document.querySelectorAll(".blob").forEach(blob=>{

let x=0;

let y=0;

setInterval(()=>{

x+=Math.random()*6-3;

y+=Math.random()*6-3;

blob.style.transform=

`translate(${x}px,${y}px)`;

},80);

});



/* ==========================================
   Console
========================================== */

console.log(
"%cVersion 2 Loaded 🚀",
"font-size:18px;color:#8B5CF6;font-weight:bold;"
);
/* ==========================================
   VERSION 3 - PROJECTS
========================================== */

// Animate project cards on scroll

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";

        }

    });

}, {
    threshold: 0.2
});

projectCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px) scale(.95)";
    card.style.transition = `all .8s ease ${index * 0.2}s`;

    projectObserver.observe(card);

});


/* ==========================================
   Project Image Hover
========================================== */

document.querySelectorAll(".project-image img").forEach(img => {

    img.addEventListener("mousemove", (e) => {

        const rect = img.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

        img.style.transform =
            `scale(1.1) rotateX(${-y}deg) rotateY(${x}deg)`;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotateX(0) rotateY(0)";

    });

});


/* ==========================================
   Tech Tags Animation
========================================== */

document.querySelectorAll(".project-tags span").forEach(tag => {

    tag.addEventListener("mouseenter", () => {

        tag.style.transform = "translateY(-4px) scale(1.08)";

    });

    tag.addEventListener("mouseleave", () => {

        tag.style.transform = "translateY(0) scale(1)";

    });

});


/* ==========================================
   Coming Soon Animation
========================================== */

const progressFill = document.querySelector(".progress-fill");

if (progressFill) {

    let progress = 55;

    setInterval(() => {

        progress++;

        if (progress > 72) progress = 55;

        progressFill.style.width = progress + "%";

    }, 120);

}


/* ==========================================
   Ripple Effect on Buttons
========================================== */

document.querySelectorAll(".project-buttons a").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.position = "absolute";
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.background = "rgba(255,255,255,.5)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "translate(-50%,-50%)";
        ripple.style.animation = "ripple .6s ease-out";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});


console.log("%cVersion 3 Loaded 🚀", "color:#38bdf8;font-size:18px;font-weight:bold;");
/* ==========================================
VERSION 4 NAVBAR
========================================== */

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navBar.style.padding="12px 28px";

navBar.style.background="rgba(5,10,20,.92)";

navBar.style.boxShadow="0 20px 50px rgba(0,0,0,.45)";

}

else{

navBar.style.padding="16px 32px";

navBar.style.background="rgba(8,12,25,.65)";

navBar.style.boxShadow="none";

}

});