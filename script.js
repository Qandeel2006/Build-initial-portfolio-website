// ============================================================
// QANDEEL QUDSIA | PORTFOLIO JAVASCRIPT
// ============================================================
// This file controls all interactive features of the portfolio.
//
// VERSION 1 → Core functionality
// VERSION 2 → Advanced animations
// VERSION 3 → Project animations
// VERSION 4 → Premium navbar
// VERSION 5 → Theme switcher + Contact form
//
// IMPORTANT:
// The navbar background is NOT controlled by JavaScript.
// CSS controls the light/dark appearance so the navbar
// stays consistent with the selected theme.
// ============================================================



// ============================================================
// VERSION 1
// CORE PORTFOLIO FUNCTIONALITY
// ============================================================



// ------------------------------------------------------------
// 1. TYPING EFFECT
// ------------------------------------------------------------
// Creates the animated text in the Hero section.
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

    // -------------------------
    // Typing
    // -------------------------

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        // When the complete word is typed,
        // pause before deleting.
        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    }

    // -------------------------
    // Deleting
    // -------------------------

    else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        // When the word disappears,
        // move to the next word.
        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    // Deleting is faster than typing.
    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();



// ------------------------------------------------------------
// 2. SECTION REVEAL ANIMATION
// ------------------------------------------------------------
// Elements with the "reveal" class become visible when
// they enter the viewport.
// ------------------------------------------------------------

const reveals =
    document.querySelectorAll(".reveal");

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
// Moves the purple glow according to the mouse position.
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
// Shows how far the visitor has scrolled down the page.
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
// Makes navigation links smoothly scroll to sections.
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
// Highlights the navbar link belonging to the section
// currently being viewed.
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

        if (
            window.scrollY >=
            sectionTop
        ) {

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
// Opens and closes the navigation menu on small screens.
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
// 8. BUTTON HOVER EFFECT
// ------------------------------------------------------------
// Adds a small lift effect to the main buttons.
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
// 9. FLOATING PROFILE CARD
// ------------------------------------------------------------
// Creates a subtle 3D movement when the mouse moves.
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
// 10. PROFILE CARD RESET
// ------------------------------------------------------------
// Returns the profile card to its normal position when
// the mouse leaves the page.
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



// ============================================================
// VERSION 2
// ADVANCED ANIMATIONS
// ============================================================



// ------------------------------------------------------------
// 11. COUNTER ANIMATION
// ------------------------------------------------------------
// Animates the statistics in the About section.
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
                        Number(
                            counter.dataset.target
                        );

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
                    // running again.
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
// 12. TIMELINE ANIMATION
// ------------------------------------------------------------
// Slides timeline cards into position.
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
// 13. SKILL CARD 3D HOVER
// ------------------------------------------------------------
// Tilts skill cards according to mouse position.
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
// 14. STAGGER REVEAL
// ------------------------------------------------------------
// Gives cards a slightly different entrance delay.
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
// 15. FLOATING BACKGROUND BLOBS
// ------------------------------------------------------------
// Adds subtle random movement to the background blobs.
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



// ============================================================
// VERSION 3
// PROJECT SECTION
// ============================================================



// ------------------------------------------------------------
// 16. PROJECT CARD SCROLL ANIMATION
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
// 17. PROJECT IMAGE HOVER
// ------------------------------------------------------------
// Adds a subtle 3D movement to project images.
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
// 18. PROJECT TECHNOLOGY TAGS
// ------------------------------------------------------------
// Adds a small hover animation to technology tags.
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
// 19. COMING SOON PROGRESS ANIMATION
// ------------------------------------------------------------
// Animates the progress bar in the Portfolio Website
// "Coming Soon" card.
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
// 20. PROJECT BUTTON RIPPLE EFFECT
// ------------------------------------------------------------
// Creates a ripple effect when GitHub or Preview buttons
// are clicked.
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
                    (event.clientX - rect.left) +
                    "px";

                ripple.style.top =
                    (event.clientY - rect.top) +
                    "px";

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



// ============================================================
// VERSION 4
// PREMIUM NAVBAR
// ============================================================
// IMPORTANT:
// JavaScript ONLY changes navbar size and shadow.
//
// It does NOT change the navbar background.
//
// This allows CSS to control the light/dark theme correctly.
// ============================================================

const navBar =
    document.querySelector(".navbar");

function updatePremiumNavbar() {

    if (!navBar) return;

    if (window.scrollY > 60) {

        // Make navbar slightly smaller while scrolling.
        navBar.style.padding =
            "12px 28px";

        // Add a soft shadow.
        navBar.style.boxShadow =
            "0 20px 50px rgba(0,0,0,.25)";

    }

    else {

        // Return navbar to original size.
        navBar.style.padding =
            "16px 32px";

        // Remove shadow.
        navBar.style.boxShadow =
            "none";

    }

}

// Only ONE scroll listener.
window.addEventListener(
    "scroll",
    updatePremiumNavbar
);



// ============================================================
// VERSION 5
// THEME SWITCHER
// ============================================================
// Saves the selected theme in localStorage so the user's
// choice remains after refreshing the page.
// ============================================================

const themeToggle =
    document.getElementById("theme-toggle");

function applySavedTheme() {

    if (!themeToggle) return;

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        themeToggle.textContent =
            "🌙";

    }

    else {

        document.body.classList.remove(
            "light-theme"
        );

        themeToggle.textContent =
            "☀️";

    }

}

applySavedTheme();



// ------------------------------------------------------------
// Theme button click
// ------------------------------------------------------------

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );

            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );

            // Change the icon.
            themeToggle.textContent =
                isLight ? "🌙" : "☀️";

            // Remember the user's choice.
            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );

        }
    );

}



// ============================================================
// CONTACT FORM
// ============================================================
// Prevents the form from trying to reload the local HTML file.
//
// NOTE:
// This currently displays a success message only.
// It does NOT send an email yet.
// ============================================================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            // Stop the browser's normal form submission.
            event.preventDefault();

            alert(
                "Thank you! Your message has been received. 🚀"
            );

            // Clear the form.
            contactForm.reset();

        }
    );

}



// ============================================================
// INITIAL SETUP
// ============================================================
// Runs important functions immediately when the page loads.
// ============================================================

window.addEventListener(
    "load",
    () => {

        revealSections();

        updateScrollProgress();

        updateActiveNavbar();

        updatePremiumNavbar();

    }
);



// ============================================================
// CONSOLE MESSAGES
// ============================================================

console.log(
    "%cWelcome Qandeel 👋",
    "color:#22d3ee;font-size:22px;font-weight:bold;"
);

console.log(
    "%cPortfolio JavaScript Loaded Successfully 🚀",
    "color:#22d3ee;font-size:20px;font-weight:bold;"
);

console.log(
    "%cVersions 1 → 5 Active ✅",
    "color:#8B5CF6;font-size:16px;font-weight:bold;"
);