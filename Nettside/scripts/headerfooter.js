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

// English translation for mobile
const english_mob = document.createElement('input');
english_mob.id = 'translate_phone';
english_mob.classList.add('translate')
english_mob.type = 'image';
english_mob.src = 'img/translateimg.png';
english_mob.alt = 'translate';

navbar.appendChild(english_mob); // Add translation for mobile to navigation bar

header.appendChild(navbar); // Add navigation background to header

// English translation for desktop
const english_desk = document.createElement('input');
english_desk.id = 'translate_desk';
english_desk.classList.add('translate')
english_desk.type = 'image';
english_desk.src = 'img/translateimg.png';
english_desk.alt = 'translate';

header.appendChild(english_desk); // Add translation for desktop to header

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

facebookLink.appendChild(facebookLogo); // Add logo to facebook link

footer.appendChild(facebookLink); // Add facebook to header

// Instagram
const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/trondheimlindyhop/';
instagramLink.target = '_blank';

const instagramLogo = document.createElement('img');
instagramLogo.src = "img/instagramLogo.png";
instagramLogo.alt = "instagram";

instagramLink.appendChild(instagramLogo); // Add logo to instagram link

footer.appendChild(instagramLink); // Add instagram to header

// Mail
const mail = document.createElement('p');

// mailto link
const mail_a = document.createElement('a');
mail_a.href = "mailto:trdkurs@gmail.com"; // Turn mail into a clickable link
mail_a.appendChild(document.createTextNode("trdkurs@gmail.com"));

mail.appendChild(mail_a); // Add mailto link to mail

footer.appendChild(mail); // Add mail to footer

// Address
const address = document.createElement('p');

// Google Maps Link
const address_a = document.createElement('a');
address_a.href = 'https://www.google.no/maps/place/%C3%98stersunds+gate+1';
address_a.target = '_blank';
address_a.appendChild(document.createTextNode("Østersundsgate 1, 7042 Trondheim"));

address.appendChild(address_a); // Add link to address

footer.appendChild(address); // Add address to footer
