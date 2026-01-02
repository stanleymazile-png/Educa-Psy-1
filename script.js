
const bouton = document.getElementById("contactBtn");
const sectioncontact = document.getElementById("contact");

const formulaire = document.getElementById("contactform");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const message= document.getElementById("message");
const formmessage = document.getElementById("formmessage");

const nameErreur = document.getElementById("nameErreur");
const emailErreur = document.getElementById("emailErreur");
const messageErreur = document.getElementById("messageErreur");

if (bouton && sectioncontact) {
    bouton.addEventListener("click", function () {
    sectioncontact.scrollIntoView( { behavior:"smooth"});
});
}

if (formulaire) {
    formulaire.addEventListener("submit", 
function (event) {

nameErreur.textContent="";
emailErreur.textContent="";
messageErreur.textContent="";


formmessage.classList.remove("erreur");
formmessage.classList.remove("succes");

let erreur = false;

    if(nom.value.trim() === "") {
        nameErreur.textContent="Veuillez entrer votre nom";
        erreur= true;
    }
    
    if (email.value.trim()=== "") {
     emailErreur.textContent="Veuillez entrer votre email";
        erreur= true;
    }
    else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailErreur.textContent= "Adresse email invalide";
        erreur= true; 
    }
    if (message.value.trim()=== "") {
     messagelErreur.textContent="Veuillez eecrire votre message";
        erreur= true;
    } 
    if (erreur) {  
        formmessage.textContent= "Veuillez vorriger les erreurs ci dessus";
formmessage.classList.add("erreur");
        event.preventDefault();
        return;
    }

    formmessage.textContent= "Merci, votre message envoye";
formmessage.classList.add("succes");

nom.value ="";
email.value ="";
message.value ="";
event.preventDefault();
});
}
