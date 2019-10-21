var i = 0
var forsidebilder = []
var tid = 5000

forsidebilder[0] = "img/forsidebilde1.jpg"
forsidebilder[1] = "img/forsidebilde2.jpg"
forsidebilder[2] = "img/forsidebilde3.jpg"
forsidebilder[3] = "img/forsidebilde4.jpg"

function byttBilde(){
  document.querySelector("#forsidebilde").src = forsidebilder[i]

  if(i < forsidebilder.length -1){
    i++
  }
  else {
    i = 0
  }

  setTimeout("byttBilde()", tid)
}

window.onload = byttBilde
