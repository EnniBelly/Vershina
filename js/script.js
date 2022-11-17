// +++++++++++++++++++++++ search form ++++++++++++++++++++++++

const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');

searchBtn.onclick = () => {
  searchBox.classList.add('active');
  searchInput.classList.add('active');
  searchBtn.classList.add('active');
  cancelBtn.classList.add('active');
}
cancelBtn.onclick = () => {
  searchBox.classList.remove('active');
  searchInput.classList.remove('active');
  searchBtn.classList.remove('active');
  cancelBtn.classList.remove('active');
}

// +++++++++++++++++++++++ navigation fixed and button ++++++++++++++++++++++++++++++++

const navbar = document.getElementById('navigation');
const menu = document.getElementById('menu');
const scrollTop = document.getElementById('scrollTop');
const contact = document.querySelector('.contact');

window.onscroll = function() {  
  if (window.scrollY > 700) {
    scrollTop.classList.add('scrollToTop');
    navbar.classList.add('stiky');
  }
  if (window.scrollY < 700){
    scrollTop.classList.remove('scrollToTop');
    navbar.classList.remove('stiky');
  } 
}

// if(window.pageYOffset >= menu.offsetTop) {
//     navbar.classList.add('stiky');
//   }

// ++++++++++++++++++++++ popup +++++++++++++++++++++++++++++++++++++++++

const popupsInner = document.querySelector('.popups-inner');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const cancelPopup = document.querySelector('.cancel-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupsInner.classList.add('active');
  })
});

cancelPopup.addEventListener('click', () => {
  popupsInner.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if(e.target === popupsInner) {
    popupsInner.classList.remove('active');
  }
});

// +++++++++++++++++++++++++++++++++ reviews +++++++++++++++++++++++++++++++++++

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("container__slide");
//     const dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" reviews-active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " reviews-active";
//     setTimeout(showSlides, 5000);
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("container__slide");
  const dots = document.getElementsByClassName("dot-navigation");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" reviews-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " reviews-active";
}

// +++++++++++++++++++++++++++++++++++++++++ data ++++++++++++++++++++++++++++++
const dataNow = new Date();
document.getElementById("datenow").innerHTML = dataNow.getFullYear();

// ++++++++++++++++++++++ scroll to top ++++++++++++++++++++++

scrollTop.addEventListener('click', () => {
  scrollTo(contact);
})