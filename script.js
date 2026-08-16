// ============================================================
// QANDEEL QUDSIA | PORTFOLIO JAVASCRIPT
// ============================================================
// This file contains all JavaScript functionality for the
// portfolio website.
//
// Versions included:
// V1 → Core interactions and animations
// V2 → Advanced animations and counters
// V3 → Project section animations
// V4 → Premium navbar behavior
//
// Everything is organized into sections so it is easier to
// understand, edit, and maintain.
// ============================================================



// ============================================================
// VERSION 1
// CORE PORTFOLIO FUNCTIONALITY
// ============================================================



// ------------------------------------------------------------
// 1. TYPING EFFECT
// ------------------------------------------------------------
// This creates the animated text in the Hero section.
// It types each word, pauses, deletes it, and then moves
// to the next word.
// ------------------------------------------------------------

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

    // Stop if the typing element does not exist.
    if (!typing) return;

    const currentWord = words[wordIndex];

    // --------------------------------------------------------
    // Typing characters
    // --------------------------------------------------------

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        // When the complete word has been typed,
        // wait before starting deletion.
        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    }

    // --------------------------------------------------------
    // Deleting characters
    // --------------------------------------------------------

    else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        // When the word has completely disappeared,
        // move to the next word.
        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            // Restart from the first word when we reach
            // the end of the list.
            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    // Typing is slower than deleting.
    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();



// ------------------------------------------------------------
// 2. SECTION REVEAL ANIMATION
// ------------------------------------------------------------
// Elements with the "reveal" class become visible when they
// enter the screen while scrolling.
// ------------------------------------------------------------

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });
}

window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);



// ------------------------------------------------------------
// 3. MOUSE GLOW
// ------------------------------------------------------------
// Moves the glowing circle according to the user's mouse.
// ------------------------------------------------------------

const glow =
    document.getElementById("cursor-glow");

if (glow) {

    document.addEventListener(
        "mousemove",
        event => {

            glow.style.left =
                event.clientX + "px";

            glow.style.top =
                event.clientY + "px";

        }
    );

}



// ------------------------------------------------------------
// 4. SCROLL PROGRESS BAR
// ------------------------------------------------------------
// Calculates how far the user has scrolled and updates
// the width of the progress bar at the top of the page.
// ------------------------------------------------------------

const progressBar =
    document.getElementById("progress-bar");

function updateScrollProgress() {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight;

    const clientHeight =
        document.documentElement.clientHeight;

    const height =
        scrollHeight - clientHeight;

    // Prevent division by zero.
    if (height <= 0) {

        progressBar.style.width = "0%";

        return;

    }

    const width =
        (scrollTop / height) * 100;

    progressBar.style.width =
        width + "%";
}

window.addEventListener(
    "scroll",
    updateScrollProgress
);



// ------------------------------------------------------------
// 5. SMOOTH SCROLL
// ------------------------------------------------------------
// Makes navbar links smoothly scroll to their sections.
// ------------------------------------------------------------

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");

                // Ignore empty "#"
                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    });



// ------------------------------------------------------------
// 6. ACTIVE NAVBAR LINK
// ------------------------------------------------------------
// Detects which section is currently visible and highlights
// its corresponding navbar link.
// ------------------------------------------------------------

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

function updateActiveNavbar() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });
}

window.addEventListener(
    "scroll",
    updateActiveNavbar
);



// ------------------------------------------------------------
// 7. MOBILE MENU
// ------------------------------------------------------------
// Opens and closes the navigation menu on smaller screens.
// ------------------------------------------------------------

const menu =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector(".nav-links");

if (menu && nav) {

    menu.addEventListener(
        "click",
        () => {

            nav.classList.toggle("show");

        }
    );

}



// ------------------------------------------------------------
// 8. NAVBAR BACKGROUND
// ------------------------------------------------------------
// Changes the navbar background and shadow after scrolling.
// This is the original V1 navbar behavior.
// V4 later adds the shrinking effect.
// ------------------------------------------------------------

const navbar =
    document.querySelector(".navbar");

function updateNavbarBackground() {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10,10,20,.85)";

        navbar.style.boxShadow =
            "0 20px 60px rgba(0,0,0,.4)";

    }

    else {

        navbar.style.background =
            "rgba(255,255,255,.05)";

        navbar.style.boxShadow =
            "none";

    }

}

window.addEventListener(
    "scroll",
    updateNavbarBackground
);



// ------------------------------------------------------------
// 9. BUTTON HOVER EFFECT
// ------------------------------------------------------------
// Adds a small lift and scale effect when hovering over
// normal portfolio buttons.
// ------------------------------------------------------------

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-5px) scale(1.03)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0px)";

        }
    );

});



// ------------------------------------------------------------
// 10. FLOATING PROFILE CARD
// ------------------------------------------------------------
// Makes the profile card slightly rotate according to
// mouse movement, creating a 3D floating effect.
// ------------------------------------------------------------

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    window.innerWidth / 2 -
                    event.clientX
                ) / 35;

            const y =
                (
                    window.innerHeight / 2 -
                    event.clientY
                ) / 35;

            profileCard.style.transform =
                `rotateY(${-x}deg) rotateX(${y}deg)`;

        }
    );

}



// ------------------------------------------------------------
// 11. PROFILE CARD RESET
// ------------------------------------------------------------
// Resets the profile card rotation when the mouse leaves
// the document.
// ------------------------------------------------------------

document.addEventListener(
    "mouseleave",
    () => {

        if (profileCard) {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }

    }
);



// ------------------------------------------------------------
// V1 CONSOLE MESSAGE
// ------------------------------------------------------------

console.log(
    "%cWelcome Qandeel 👋",
    "color:#22d3ee;font-size:22px;font-weight:bold"
);

console.log(
    "Portfolio Version 1 Loaded Successfully 🚀"
);





// ============================================================
// VERSION 2
// ADVANCED ANIMATIONS
// ============================================================



// ------------------------------------------------------------
// 12. COUNTER ANIMATION
// ------------------------------------------------------------
// Animates the numbers in the About section.
//
// Example:
// data-target="10"
// starts from 0 and counts up to 10.
// ------------------------------------------------------------

const counters =
    document.querySelectorAll(".counter");

if ("IntersectionObserver" in window) {

    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const counter =
                        entry.target;

                    const target =
                        Number(counter.dataset.target);

                    let count = 0;

                    const speed =
                        target / 80;

                    function updateCounter() {

                        if (count < target) {

                            count += speed;

                            counter.innerText =
                                Math.ceil(count);

                            requestAnimationFrame(
                                updateCounter
                            );

                        }

                        else {

                            counter.innerText =
                                target;

                        }

                    }

                    updateCounter();

                    // Prevent the same counter from
                    // running repeatedly.
                    observer.unobserve(counter);

                });

            },
            {
                threshold: 0.6
            }
        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}



// ------------------------------------------------------------
// 13. TIMELINE ANIMATION
// ------------------------------------------------------------
// Slides timeline cards into position when they appear.
// ------------------------------------------------------------

const timelineCards =
    document.querySelectorAll(".timeline-card");

if ("IntersectionObserver" in window) {

    const timelineObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateX(0)";

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

    timelineCards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateX(80px)";

        card.style.transition =
            ".8s ease";

        timelineObserver.observe(card);

    });

}



// ------------------------------------------------------------
// 14. SKILL CARD 3D HOVER
// ------------------------------------------------------------
// Makes skill cards tilt according to the mouse position.
// ------------------------------------------------------------

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                (y - rect.height / 2) / 18;

            const rotateY =
                (rect.width / 2 - x) / 18;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(0deg)";

        }
    );

});



// ------------------------------------------------------------
// 15. STAGGER REVEAL
// ------------------------------------------------------------
// Gives About, Stats, Timeline and Skill cards a staggered
// entrance animation.
//
// Each card gets a slightly different delay.
// ------------------------------------------------------------

const revealItems =
    document.querySelectorAll(
        ".glass-card, .stat-card, .timeline-item, .skill-card"
    );

if ("IntersectionObserver" in window) {

    const staggerObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show-item"
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    revealItems.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(60px)";

        item.style.transition =
            `.7s ease ${index * 0.08}s`;

        staggerObserver.observe(item);

    });

}



// ------------------------------------------------------------
// 16. FLOATING BACKGROUND BLOBS
// ------------------------------------------------------------
// Adds small random movements to the background blobs.
// ------------------------------------------------------------

document
    .querySelectorAll(".blob")
    .forEach(blob => {

        let x = 0;
        let y = 0;

        setInterval(() => {

            x += Math.random() * 6 - 3;
            y += Math.random() * 6 - 3;

            blob.style.transform =
                `translate(${x}px, ${y}px)`;

        }, 80);

    });



// ------------------------------------------------------------
// V2 CONSOLE MESSAGE
// ------------------------------------------------------------

console.log(
    "%cVersion 2 Loaded 🚀",
    "font-size:18px;color:#8B5CF6;font-weight:bold;"
);





// ============================================================
// VERSION 3
// PROJECT SECTION
// ============================================================



// ------------------------------------------------------------
// 17. PROJECT CARD SCROLL ANIMATION
// ------------------------------------------------------------
// Project cards appear with a smooth upward animation.
// ------------------------------------------------------------

const projectCards =
    document.querySelectorAll(".project-card");

if ("IntersectionObserver" in window) {

    const projectObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0) scale(1)";

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    projectCards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(80px) scale(.95)";

        card.style.transition =
            `all .8s ease ${index * 0.2}s`;

        projectObserver.observe(card);

    });

}



// ------------------------------------------------------------
// 18. PROJECT IMAGE HOVER
// ------------------------------------------------------------
// Adds a small 3D movement to project images based on
// the mouse position.
// ------------------------------------------------------------

document
    .querySelectorAll(".project-image img")
    .forEach(image => {

        image.addEventListener(
            "mousemove",
            event => {

                const rect =
                    image.getBoundingClientRect();

                const x =
                    (
                        (event.clientX - rect.left) /
                        rect.width -
                        0.5
                    ) * 10;

                const y =
                    (
                        (event.clientY - rect.top) /
                        rect.height -
                        0.5
                    ) * 10;

                image.style.transform =
                    `scale(1.1)
                     rotateX(${-y}deg)
                     rotateY(${x}deg)`;

            }
        );

        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) rotateX(0) rotateY(0)";

            }
        );

    });



// ------------------------------------------------------------
// 19. PROJECT TECHNOLOGY TAGS
// ------------------------------------------------------------
// Adds a small hover animation to tags such as Power BI,
// Tableau, Excel, DAX, etc.
// ------------------------------------------------------------

document
    .querySelectorAll(".project-tags span")
    .forEach(tag => {

        tag.addEventListener(
            "mouseenter",
            () => {

                tag.style.transform =
                    "translateY(-4px) scale(1.08)";

            }
        );

        tag.addEventListener(
            "mouseleave",
            () => {

                tag.style.transform =
                    "translateY(0) scale(1)";

            }
        );

    });



// ------------------------------------------------------------
// 20. COMING SOON PROGRESS ANIMATION
// ------------------------------------------------------------
// Continuously changes the progress bar of the
// "Portfolio Website - Coming Soon" card.
// ------------------------------------------------------------

const progressFill =
    document.querySelector(".progress-fill");

if (progressFill) {

    let progress = 55;

    setInterval(() => {

        progress++;

        if (progress > 72) {

            progress = 55;

        }

        progressFill.style.width =
            progress + "%";

    }, 120);

}



// ------------------------------------------------------------
// 21. PROJECT BUTTON RIPPLE EFFECT
// ------------------------------------------------------------
// Creates a small ripple animation when the user clicks
// GitHub or Preview buttons.
// ------------------------------------------------------------

document
    .querySelectorAll(".project-buttons a")
    .forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                const rect =
                    this.getBoundingClientRect();

                ripple.style.position =
                    "absolute";

                ripple.style.left =
                    (event.clientX - rect.left) + "px";

                ripple.style.top =
                    (event.clientY - rect.top) + "px";

                ripple.style.width =
                    "10px";

                ripple.style.height =
                    "10px";

                ripple.style.background =
                    "rgba(255,255,255,.5)";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.transform =
                    "translate(-50%,-50%)";

                ripple.style.animation =
                    "ripple .6s ease-out";

                this.appendChild(ripple);

                setTimeout(
                    () => ripple.remove(),
                    600
                );

            }
        );

    });



// ------------------------------------------------------------
// V3 CONSOLE MESSAGE
// ------------------------------------------------------------

console.log(
    "%cVersion 3 Loaded 🚀",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);





// ============================================================
// VERSION 4
// PREMIUM NAVBAR
// ============================================================
// The navbar becomes smaller and darker after the user
// starts scrolling.
// ============================================================

const navBar =
    document.querySelector(".navbar");

function updatePremiumNavbar() {

    if (!navBar) return;

    if (window.scrollY > 60) {

        // Smaller navbar when scrolling
        navBar.style.padding =
            "12px 28px";

        // Darker background
        navBar.style.background =
            "rgba(5,10,20,.92)";

        // Add shadow
        navBar.style.boxShadow =
            "0 20px 50px rgba(0,0,0,.45)";

    }

    else {

        // Return to original size
        navBar.style.padding =
            "16px 32px";

        // Return to original background
        navBar.style.background =
            "rgba(8,12,25,.65)";

        // Remove shadow
        navBar.style.boxShadow =
            "none";

    }

}

window.addEventListener(
    "scroll",
    updatePremiumNavbar
);



// ============================================================
// INITIAL SETUP
// ============================================================
// Run important functions once when the page first loads,
// instead of waiting for the first scroll.
// ============================================================

window.addEventListener(
    "load",
    () => {

        revealSections();

        updateScrollProgress();

        updateActiveNavbar();

        updateNavbarBackground();

        updatePremiumNavbar();

    }
);



// ============================================================
// FINAL CONSOLE MESSAGE
// ============================================================

console.log(
    "%cPortfolio JavaScript Loaded Successfully 🚀",
    "color:#22d3ee;font-size:20px;font-weight:bold;"
);

console.log(
    "%cVersions 1 → 4 Active ✅",
    "color:#8B5CF6;font-size:16px;font-weight:bold;"
);
/* ==========================================
   VERSION 5 — THEME SWITCHER
========================================== */

const themeToggle = document.getElementById("theme-toggle");


// Check if the user previously selected light mode

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeToggle.textContent = "🌙";

}


// Toggle theme when button is clicked

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");


        // Check current theme

        const isLight =
            document.body.classList.contains("light-theme");


        // Change button icon

        themeToggle.textContent =
            isLight ? "🌙" : "☀️";


        // Save user's choice

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

    });

}
// =========================================================
// CONTACT FORM
// Prevent the browser from reloading the local HTML file
// =========================================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Stop normal form submission
        event.preventDefault();

        alert("Thank you! Your message has been received. 🚀");

        // Clear the form
        contactForm.reset();

    });

}