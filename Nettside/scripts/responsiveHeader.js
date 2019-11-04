/*Skjuler nav-elementer eller viser dem som blokker */
function toggleBlock() {
  console.log('toggleBlock');
  var nav = document.querySelector("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

/* Setter nav til display: block ved over 600px bredde. Hentet fra https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener */
var mql = window.matchMedia('(min-width: 600px)');
function screenTest(e) {
  if (e.matches) {
    var nav = document.querySelector("nav");
    nav.style.display = "block";
  }
}
mql.addListener(screenTest);
