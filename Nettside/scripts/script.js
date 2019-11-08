// Make påmelding button link to paamelding.html
function linkFunc(){
    if (window.location.href.includes("?en=true")){
        location.href = 'paamelding.html?en=true'
    }
    else{
        location.href = 'paamelding.html'
    }
    
}

document.getElementById("knapp").addEventListener("click",linkFunc);
