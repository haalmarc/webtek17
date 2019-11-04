  /* HEADER */
const header = document.querySelector('#main-header');

// Homepage link
const homepage = document.createElement('a');
homepage.id = "home";
homepage.href = "index.html";

// Logo
const logo = document.createElement('img');
logo.id = 'logo';
logo.src = "img/tlh_logo.png";
logo.alt = "Trondheim Lindy Hop-logo";

homepage.appendChild(logo); // Add logo to homepage link

header.appendChild(homepage); // Add homepage link to header

// Navigation bar
const navbar = document.createElement('nav');

// Courses link
const courses = document.createElement('a');
courses.classList.add('navElement');
courses.href = "courses.html";
courses.appendChild(document.createTextNode("Kurs"));

navbar.appendChild(courses); // Add courses to navigation bar

// Events link
const events = document.createElement('a');
events.classList.add('navElement');
events.href = "https://www.facebook.com/pg/trdlindyhop/events/?ref=page_internal";
events.target = '_blank';
events.appendChild(document.createTextNode("Eventer"));

navbar.appendChild(events); // Add events to navigation bar

// About link
const about = document.createElement('a');
about.classList.add('navElement');
about.href = "about.html";
about.appendChild(document.createTextNode("Om oss"));

navbar.appendChild(about); // Add about to navigation bar

// English translation
const english = document.createElement('input');
english.id = 'translate';
english.type = 'image';
english.src = 'img/translateimg.png';

navbar.appendChild(english); // Add english to navigation bar

header.appendChild(navbar); // Add navigation background to header

// Hamburger menu
const hamburger = document.createElement('a');
hamburger.href = 'javascript:void(0);';
hamburger.classList.add('hamburgermenu');
hamburger.onclick = function(){toggleBlock()}; // toggleBlock() defined in responsiveHeader.js

// Hamburger menu icon
const hm_icon = document.createElement('i');
hm_icon.classList.add('fa', 'fa-bars');

hamburger.appendChild(hm_icon); // Add icon to hamburger menu

header.appendChild(hamburger); // Add hamburger menu to header

/* FOOTER */
const footer = document.querySelector('#main-footer');

// Facebook
const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/trdlindyhop/';
facebookLink.target = '_blank';

const facebookLogo = document.createElement('img');
facebookLogo.src = "img/facebookLogo.png";
facebookLogo.alt = "facebook";

facebookLink.appendChild(facebookLogo);

footer.appendChild(facebookLink); // Add facebook to header

// Instagram
const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/trondheimlindyhop/';
instagramLink.target = '_blank';

const instagramLogo = document.createElement('img');
instagramLogo.src = "img/instagramLogo.png";
instagramLogo.alt = "instagram";

instagramLink.appendChild(instagramLogo);

footer.appendChild(instagramLink); // Add instagram to header

// Mail
const mail = document.createElement('p');
mail.appendChild(document.createTextNode(" trdkurs@gmail.com "));

footer.appendChild(mail); // Add mail to footer

// Address
const address = document.createElement('p');
address.appendChild(document.createTextNode(" Østersundsgate 1, 7042 Trondheim "));

footer.appendChild(address); // Add address to footer

/*const body = document.querySelector('body');
body.insertAdjacentHTML('afterstart',
`<div class="container"><a class="home" href="./index.html"><img id="logo" src="./img/tlh_logo.png" alt="Trondheim Lindy Hop-logo">      </a><nav><a class="navElement" href="./courses.html">Kurs</a><a class="navElement" href="./courses.html">Eventer</a><a class="navElement" href="./courses.html">Om oss</a></nav><button id="engelsk">English</button></div>;

body.insertAdjacentHTML('beforeend',
`<footer><img src="img/facebookLogo.png" alt="facebookLogo"><img src="img/instagramLogo.png" alt="instagramLogo"><p> trdkurs@gmail.com </p><p> Østersundsgate 1, 7042 Trondheim </p></footer>`);*/
