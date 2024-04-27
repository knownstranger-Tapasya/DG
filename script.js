document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const images = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = button.dataset.filter;

            images.forEach(image => {
                const imageClass = image.querySelector("img").classList;
                if (filter === "all" || imageClass.contains(filter)) {
                    image.style.display = "block"; // Show images matching the filter
                } else {
                    image.style.display = "none"; // Hide images not matching the filter
                }
            });
        });
    });
});
// JavaScript for Slider
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let slideIndex = 0;

    // Show slides
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    // Next slide
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Previous slide
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }

    // Show first slide initially
    showSlide(slideIndex);

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});
// JavaScript for testimonial slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    })
});