// sticky nav bar 
window.onscroll = function() {e()};
let navbar = document.querySelector(".nav");
let sticky = navbar.offsetTop;
function e() {
     if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky")
     } else {
       navbar.classList.remove("sticky");
     }
   }
   // slider show case 
   const slides = document.querySelectorAll('.slide');
   const next = document.querySelector('#next');
   const prev = document.querySelector('#prev');
   const auto = false; // Auto scroll
   const intervalTime = 5000;
   let slideInterval;
   
   const nextSlide = () => {
     // Get current class
     const current = document.querySelector('.current');
     // Remove current class
     current.classList.remove('current');
     // Check for next slide
     if (current.nextElementSibling) {
       // Add current to next sibling
       current.nextElementSibling.classList.add('current');
     } else {
       // Add current to start
       slides[0].classList.add('current');
     }
     setTimeout(() => current.classList.remove('current'));
   };
   
   const prevSlide = () => {
     // Get current class
     const current = document.querySelector('.current');
     // Remove current class
     current.classList.remove('current');
     // Check for prev slide
     if (current.previousElementSibling) {
       // Add current to prev sibling
       current.previousElementSibling.classList.add('current');
     } else {
       // Add current to last
       slides[slides.length - 1].classList.add('current');
     }
     setTimeout(() => current.classList.remove('current'));
   };
   
   // Button events
   next.addEventListener('click', e => {
     nextSlide();
     if (auto) {
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
     }
   });
   
   prev.addEventListener('click', e => {
     prevSlide();
     if (auto) {
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
     }
   });
   
   // Auto slide
   if (auto) {
     // Run next slide at interval time
     slideInterval = setInterval(nextSlide, intervalTime);
   }
   
   // Smooth Scrolling
$('.nav a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});