const btnMenu = document.getElementById('btnMenu');
const liens = document.getElementById('liens-deroulants');

// Gérer l'ouverture du menu
btnMenu.onclick = function(e) {
    liens.classList.toggle('voir');
    e.stopPropagation();
};

// Fermer le menu si on clique ailleurs sur la page
window.onclick = function() {
    liens.classList.remove('voir');
};


