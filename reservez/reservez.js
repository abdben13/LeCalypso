
var envoyer = document.querySelector('.envoyer')
envoyer.addEventListener('click',Messageenvoi);

function Messageenvoi() {
    var nomResa = document.getElementById('Mynom').value;
    var heureResa = document.getElementById('heure').value;
    var heureResa2 = document.getElementById('heure2').value;
    var numResa = document.getElementById('numero').value;
    var persResa = document.getElementById('personne').value;
    var boissResa = document.getElementById('boissons').value;
    var goutResa = document.getElementById('gout').value;
    
    confirm("Confirmez-vous la reservation ?" +
    "\n" +
    "\nNom: " + nomResa +
    "\nNumero de tel: " + numResa +
    "\nHeure d'arrivée :" +heureResa+ "H" + heureResa2 +
    "\nNombre de personne: " + persResa +
    "\nVous avez choisi le gout: " + goutResa +
    "\nVous avez choisi comme boisson: " + boissResa);
}
/*if(Messageenvoi) {
    alert("Reservation envoyé");
}
else {
    alert("Reservation non confirmée");
}*/
const btns = document.querySelectorAll('.btn-first');
const logo = document.getElementById('.logo');
const medias = document.querySelectorAll('.bulle');
const logSociaux2 = document.querySelectorAll('.log');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3)
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"})
    .staggerFrom(logSociaux2, 1, {top: -200, opacity: 0, ease: "power2.out"})
    TL.play();
})

