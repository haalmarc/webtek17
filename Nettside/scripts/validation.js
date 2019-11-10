function validation() // inspired by https://www.geeksforgeeks.org/form-validation-using-html-javascript/                                   
{ 
    var firstname = document.forms["myform"]["fornavn"];               
    var lastname = document.forms["myform"]["etternavn"];    
    var epost = document.forms["myform"]["email"];  
    var classe =  document.forms["myform"]["klasse"];  
    var telephone = document.forms["myform"]["mobil"];  
    var how = document.forms["myform"]["hvordan"];  
    var check = document.forms["myform"]["medlemskapTLH"];  
    var accept = document.forms["myform"]["aksept"];

    if (firstname.value == "")                                  
    { 
        window.alert("Skriv inn ditt fornavn."); 
        firstname.focus(); 
        return false; 
    } 
   
    if (lastname.value == "")                               
    { 
        window.alert("Skriv inn ditt etternavn."); 
        lastname.focus(); 
        return false; 
    } 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (epost.value == "")                                   
    { 
        window.alert("Skriv inn din epost"); 
        epost.focus(); 
        return false; 
    } 
    if (!epost.value.match(mailformat))
    {
        window.alert("Oppgi gyldig epost format")
        epost.focus(); 
        return false; 
    }
   
    if (classe.selectedIndex <1 )                           
    { 
        window.alert("Velg ditt kurs."); 
        classe.focus(); 
        return false; 
    } 
   
    if (telephone.value == "")                        
    { 
        window.alert("Oppgi ditt mobilnummer"); 
        telephone.focus(); 
        return false; 
    } 
    var phoneformat = /(0047|\+47|47)?\d{8}/; // inspirert av https://stackoverflow.com/questions/34001939/regular-expression-for-norwegian-numbers
    if (!telephone.value.match(phoneformat))
    {
        window.alert("Oppgi gyldig mobil nummer")
        epost.focus(); 
        return false; 
    } 
   
    if (how.value =="")                  
    { 
        alert("Venligst skriv inn hvordan du fikk høre om oss."); 
        what.focus(); 
        return false; 
    } 
    if(check.checked == false)
    {
      alert ("Vennligst aksepter medlemskap");
      return false;
    }
    if(accept.checked == false)
    {
      alert ("Vennligst aksepter vilkår og personvernerklæringen");
      return false;
    }
    document.getElementById("paamelding").innerHTML = "<h2>" + "Påmeldingen din er nå registrert!" +"</h1>" + "<h4>" +"Du får snart epost fra oss med bekreftelsen." + "</h4>";
    return true; 
}
