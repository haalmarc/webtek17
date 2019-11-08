function googleTranslateElementInit(){
    //Generate div for the google translate element
    let translateElement = document.createElement("div");
    translateElement.id = "google_translate_element";
    let wrapper = document.querySelector(".wrapper");
    let body = document.querySelector("body");
    body.insertBefore(translateElement, wrapper);

    //Remove eventlistener from button to prevent stacking elements
    document.getElementById("translate_phone").removeEventListener("click",translateGoogle);
    document.getElementById("translate_desk").removeEventListener("click",translateGoogle);

    //Construct with the set arguments
    new google.translate.TranslateElement(
        {
        pageLanguage: 'no', 
        includedLanguages: 'en,no'}, 
        'google_translate_element');
  }

function translateGoogle(){
    changeLinks(true);
    // Code from Google plugin
    (function(){var gtConstEvalStartTime = new Date();function d(b){var a=document.getElementsByTagName("head")[0];a||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(b)}function _loadJs(b){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;d(a)}function _loadCss(b){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.charset="UTF-8";a.href=b;d(a)}function _isNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)if(!(a=a[b[c]]))return!1;return!0}
function _setupNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)a.hasOwnProperty?a.hasOwnProperty(b[c])?a=a[b[c]]:a=a[b[c]]={}:a=a[b[c]]||(a[b[c]]={});return a}window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='no';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='436911.579353047';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main_no.js');})();})();
}

//Add eventlistener to button
document.getElementById("translate_phone").addEventListener("click", translateGoogle);
document.getElementById("translate_desk").addEventListener("click", translateGoogle);

// If translate has been toggled, store it as true on the site
function changeLinks(transOn){
    url_string = window.location.href;
    let navArray = document.getElementsByClassName("navElement");
    if ((url_string.includes("en=true")|| transOn == true)){
        //Home link
        let logo = document.getElementById("home");
        logo.href = logo.href + "?en=true";
        //Nav links
        let navArray = document.getElementsByClassName("navElement");
        for (let i = 0; i < navArray.length; i++, i++){ //Ikke riktig måte å gjøre dette på, men den "riktige" måten fungerte ikke og dette har samme effekt
            navArray[i].href = navArray[i].href + "?en=true"
        }
    }
}
changeLinks(false);

//If translate has been toggled, automatically run translate function
if (window.location.href.includes("en=true")){
    translateGoogle();
}