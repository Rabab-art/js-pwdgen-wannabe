// console log

console.log('JS OK');

// RICHIEDI NOME UTENTE
var name = prompt('inserisci il tuo nome');
var surname = prompt('inserisci il tuo cognome');
var color = prompt('Qual è il tuo colore preferito');
console.log('inserisci il tuo nome:', name);
console.log('inserisci il tuo cognome ', surname);
console.log('qual è il tuo colore preferito', color);

// CALCOLIAMO LA PASSWORD
var password = name + surname + color + 21;
console.log('password', password);

// MOSTRAIMO ALL'UTENTE I SUOI DATI 

name.innertHTML = surname + color + password;
