const bouton = document.getElementById('bouton-mobile');
const menu = document.getElementById('menu-principal');

// Au clic, on change le nom de la classe pour montrer/cacher
bouton.onclick = function() {
    if (menu.className === "affiche") {
        menu.className = "";
    } else {
        menu.className = "affiche";
    }
};
