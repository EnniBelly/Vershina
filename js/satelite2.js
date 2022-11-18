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
  if (window.scrollY > 400) {
    scrollTop.classList.add('scrollToTop');
    navbar.classList.add('stiky');
  }
  if (window.scrollY < 400){
    scrollTop.classList.remove('scrollToTop');
    navbar.classList.remove('stiky');
  } 
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

// +++++++++++++++++++++++++++++++++++++ lightbox ++++++++++++++++++++++++++++++++++++++++++++++

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})