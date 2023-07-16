// ==================== AuTO NAME =================
const typed = new Typed('.home--title', {
  strings: ['محمد الحراكي'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  shuffle: false,
  fadeOutClass: 'typed-fade-out',
})

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

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//     e.preventDefault()

//     // serviceID - templateID - #form - publicKey
//     emailJs.sendForm('service_socy2pb', 'template_tgc5eff', '#contact-form', '5nmIPKDnmrhCZic3S')

//         .then(()=> {

//             	// Show sent message
//                 contactMessage.textContent = 'Message sent successfully ✅'

//                 	// Remove message after five seconds
//                 setTimeout(() => {
//                     contactMessage.textContent = ''
//                 }, 5000);

//                 	// Clear input fields
//                 contactForm.reset()

//             }, () => {
//                 // Show error message
//                 contactMessage.textContent = 'Message not sent (service error) ❌'

//         })
// }

// contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.home--subtitle , .skills--data, .section--subtitle`)
sr.reveal(`.home--title, .section--title`, {delay: 500})
sr.reveal(`.home--education`, {delay: 600})
sr.reveal(`.home--description, .footer--footer`, {delay: 700})
sr.reveal(`.services--containerr, .projects--containerr, .popular__containerr, .contact--containerr`, {delay: 800})
sr.reveal(`.skills--content, .footer--containerr`, {delay: 800, origin: 'bottom'})
sr.reveal(`.home--social-link, .about--box, .projects--card, .logos--img, .skills--mySkills ` , {interval: 100})
sr.reveal(`.home--image, .about--image` , {origin: 'left'})
sr.reveal(`.home--data, .about--data ` , {origin: 'right'})


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


// ========================= BTN SHOW MORE ================================
let BtnShow  = document.getElementById('Btn-show-more')
let currentItem = 4;

BtnShow.onclick = () =>{
   let boxes = [...document.querySelectorAll('.projects--containerr .projects--card ')];
   for (var i = currentItem; i < currentItem + 2; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 2;

   if(currentItem >= boxes.length){
    BtnShow.style.display = 'none';
   }
}

// ============================ Count ===============================
let nums = document.querySelectorAll(".nums .num");
let sectionAbout = document.querySelector(".about");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= 500) {
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
//     new google.translate.TranslateElement({pageLanguage: 'ar', Language :'en'}, 'google_translate_element');
//   }