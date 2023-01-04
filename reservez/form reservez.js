let monNom = document.getElementById('Mynom');
let noms = "";
let heure = document.getElementById('heure');
let heure2 = document.getElementById('heure2');
let heureResa;
let heure2Resa;
let numero = document.getElementById('numero');
let numresa;
let nombrePersonne = document.getElementById('personne');
let nomPersonnes;
let gout = document.getElementById('gout');
let gouts;
let boisson = document.getElementById('boisson');
let boissons;
const form = document.querySelector("form");
const envoyer = document.getElementById('envoyer');

monNom.addEventListener('input', (e) => { noms = e.target.value});
heure.addEventListener('input', (e) => { heureResa = e.target.value});
heure2.addEventListener('input', (e) => { heure2Resa = e.target.value});
numero.addEventListener('input', (e) => { numresa = e.target.value});
nombrePersonne.addEventListener('input', (e) => { nomPersonnes = e.target.value});
gout.addEventListener('input', (e) => { gouts = e.target.value});
boisson.addEventListener('input', (e) => { boissons = e.target.value});
form.addEventListener('submit', (e) => { e.preventDefault();});
envoyer.addEventListener('click', Message);

function Message() {
confirm("Confirmez-vous la reservation ?" +
    "\n" +
    "\nNom: " + noms +
    "\nNumero de tel: " + numresa +
    "\nHeure d'arrivée :" +heureResa+ "H" + heure2Resa +
    "\nNombre de personne: " + nomPersonnes +
    "\nVous avez choisi le gout: " + gouts +
    "\nVous avez choisi comme boisson: " + boissons)};