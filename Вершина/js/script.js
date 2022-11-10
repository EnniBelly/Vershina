// +++++++++++++++++++++++ поисковая форма ++++++++++++++++++++++++

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

// +++++++++++++++++++++++ navigation fixed ++++++++++++++++++++++++++++++++

const navbar = document.getElementById('navigation');
const menu = document.getElementById('menu');

window.onscroll = function() {
  if(window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add('stiky');
  }
  else{
    navbar.classList.remove('stiky');
  }
}

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