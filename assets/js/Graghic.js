/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),  
      navClose = document.getElementById('nav-close')  

    //   menu show 
    // Validata if constant exists

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }
        

    //  menu hidden
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }    

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav--link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
function blurHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the blur-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('blur-header'); else header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiperPopular1 = new Swiper(".Graghic--container-1", {
    grabCursor: true,
    effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
    speed: 900,
    parallax: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 25,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: true,
      },
      pagination: {
        el: ".swiper-pagination ",
        dynamicBullets: true,
      },
    coverflowEffect: {
        rotate: 10,
    },
    breakpoints: {
    267: {
      slidesPerView: 1,
    },
    402: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      spaceBetween: 48,
      slidesPerView: 2.3,
    },
      },
});

let swiperPopular2 = new Swiper(".Graghic--container-2", {
  grabCursor: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1200,
  parallax: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 25,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
      el: ".swiper-pagination ",
      dynamicBullets: true,
    },
  coverflowEffect: {
      rotate: 10,
  },
  breakpoints: {
  267: {
    slidesPerView: 1,
  },
  402: {
    slidesPerView: 1.1,
  },
  768: {
    slidesPerView: 2.8,
  },
  1024: {
    spaceBetween: 48,
    slidesPerView: 2.3,
  },
    },
});

/*==================== SWIPER Popular ====================*/
let swiperPopular = new Swiper(".popular__containerr", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  coverflowEffect: {
      rotate: 8,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  768: {
    slidesPerView: 2.8,
  },
  1024: {
    spaceBetween: 48,
    slidesPerView: 2.7,
  },
    },

      
});




/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ============================ Count ===============================
let nums = document.querySelectorAll(".num");
let sectionAbout = document.querySelector(".Graghic");
let started = false; // Function Started ? No

window.onload = function () {
  if (window.scrollY >= 0) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}




// // ========================= TRANSLATE ================================
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'ar'}, 'google_translate_element');
//   }