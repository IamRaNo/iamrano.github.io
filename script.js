document.addEventListener("DOMContentLoaded", function () {
    // Certificate Preview
    const previewButtons = document.querySelectorAll(".preview-btn");
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = modal.querySelector(".close");

    previewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            if (imgSrc) {
                modalImg.src = imgSrc;
                modal.classList.add("show");
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.remove("show");
        modalImg.src = "";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
            modalImg.src = "";
        }
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in on scroll
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    fadeInElements.forEach(el => observer.observe(el));
});
