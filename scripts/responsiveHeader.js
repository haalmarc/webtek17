/* Skjuler nav-elementer eller viser dem som blokker */
function toggleBlock() {
  var nav = document.querySelector("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

/* Setter nav til 'display: block' ved over 700px bredde. Hentet fra https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener */
var mql = window.matchMedia('(min-width: 700px)');
function screenTest(e) {
  if (e.matches) {
    var nav = document.querySelector("nav");
    nav.style.display = "block";
  }
}
mql.addListener(screenTest);


// Lukke meny om det klikkes på body
function makeBlock(){
  var nav = document.querySelector("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  }
}

document.getElementById("textBody").addEventListener("click", makeBlock)
