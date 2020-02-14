let index = 0
let tid = 5000

const forsidebilder = document.querySelectorAll(".forsidebilde")
console.log(forsidebilder)
function byttBilde(){

  for (let i = 0; i < forsidebilder.length; i++) {
    if(i === index){
      forsidebilder[index].style.display = "block"
    }
    else {
    forsidebilder[i].style.display = "none"
    forsidebilder[i].style.opacity = 0
    }
    }
  }

  if(index < forsidebilder.length -1){
    index++
  }
  else {
    index = 0
  }

  setTimeout("byttBilde()", tid)
}

window.onload = byttBilde
