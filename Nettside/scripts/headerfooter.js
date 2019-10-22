/* HEADER */
const header = document.querySelector('#main-header');

// Container div
const container = document.createElement('div')
container.class = "container";

// Homepage link
const homepage = document.createElement('a');
homepage.class = "home";
homepage.href = "index.html";

// Logo
const logo = document.createElement('img');
logo.id = "logo";
logo.src = "img/tlh_logo.png";
logo.alt = "Trondheim Lindy Hop-logo";

homepage.appendChild(logo); // Add logo to homepage link

container.appendChild(homepage); // Add homepage link to container div

// Navigation bar
const navbar = document.createElement('nav');

// Courses link
const courses = document.createElement('a');
courses.class = "navElement";
courses.href = "courses.html";
courses.appendChild(document.createTextNode("Kurs"));

navbar.appendChild(courses); // Add courses to navigation bar

// Events link
const events = document.createElement('a');
events.class = "navElement";
events.href = "events.html";
events.appendChild(document.createTextNode("Eventer"));

navbar.appendChild(events); // Add events to navigation bar

// About link
const about = document.createElement('a');
about.class = "navElement";
about.href = "about.html";
about.appendChild(document.createTextNode("Om oss"));

navbar.appendChild(about); // Add about to navigation bar

container.appendChild(navbar); // Add navigation bar to container

header.appendChild(container); // Add container to header


/* FOOTER */
const footer = document.querySelector('#main-footer');

// Facebook
const facebookLogo = document.createElement('img');
facebookLogo.src = "img/facebookLogo.png";
facebookLogo.alt = "facebook";

footer.appendChild(facebookLogo); // Add facebook to header

// Instagram
const instagramLogo = document.createElement('img');
instagramLogo.src = "img/instagramLogo.png";
instagramLogo.alt = "instagram";

footer.appendChild(instagramLogo); // Add instagram to header

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
