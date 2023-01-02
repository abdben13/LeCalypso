let monNom = document.getElementById('Mynom');
let noms = "";
let heure = document.getElementById('heure');
let heureResa;
let numero = document.getElementById('numero');
let numresa;
let nombrePersonne = document.getElementById('personne');
let nomPersonnes;
let gout = document.getElementById('gout');
let gouts;
let boisson = document.getElementById('boisson');
let boissons;


monNom.addEventListener('input', (e) => { noms = e.target.value});
heure.addEventListener('input', (e) => { heureResa = e.target.value});
numero.addEventListener('input', (e) => { numresa = e.target.value});
nombrePersonne.addEventListener('input', (e) => { nomPersonnes = e.target.value});
gout.addEventListener('input', (e) => { gouts = e.target.value});
boisson.addEventListener('input', (e) => { boissons = e.target.value});

