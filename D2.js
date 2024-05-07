/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 3;
const numero2 = 10;
console.log(numero1 > numero2 ? "il numero piu grande è: " + numero1 : "il numero piu grande è: " + numero2);
// if (numero1 > numero2) {
//   console.log("il numero piu grande è: ", numero1);
// } else {
//   console.log("il numero piu grande è: ", numero2);
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(numero1 !== 5 ? "not equal" : "equal");
// if (numero1 !== 5) {
//   console.log("not equal");
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(numero2 % 5 ? "non divisibile perfettamente per 5" : "divisibile per 5");
// if (numero2 % 5) {
//   //il resto di numero2 % 5 è 0 che è considerato falso(10%5 = 0)
//   console.log("non divisibile perfettamente per 5");
// } else {
//   // quindi esegue questa condizione
//   console.log("divisibile per 5");
// }
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 === 8 || numero2 === 8) {
  console.log("uno dei numeri ha valore 8");
} else if (numero1 + numero2 === 8 || numero1 - numero2 === 8) {
  console.log("nessuno dei numeri ha valore 8");
} else {
  console.log("nessuna delle precedenti condizioni è vera");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30;
const spedizione = 10;
if (totalShoppingCart <= 50) {
  checkout = totalShoppingCart + spedizione;
  console.log("l'ammontare totale del tuo checkout è:", checkout);
} else {
  console.log("l'ammontare totale del tuo checkout è:", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let blackFriday = true;
if (blackFriday) {
  checkout = totalShoppingCart - totalShoppingCart * 0.2; //prima si fanno le moltiplicazioni poi le sottrazioni
  //console.log(checkout);
  if (checkout <= 50) {
    checkout += spedizione;
    console.log("l'ammontare totale del tuo checkout è:", checkout);
  } else {
    console.log("l'ammontare totale del tuo checkout è:", checkout);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const a = 422;
const b = 10;
const c = 2;

if (a > b && b > c) {
  console.log(a, b, c);
} else if (a > c && c > b) {
  console.log(a, c, b);
} else if (b > a && a > c) {
  console.log(b, a, c);
} else if (b > c && c > a) {
  console.log(b, c, a);
} else if (c > b && b > a) {
  console.log(c, b, a);
} else {
  console.log(c, a, b);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Gabriel";

console.log(typeof nome === "number" ? "il valore è un numero" : "il valore non è un numero");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(numero1 % 2 === 0 ? "il numero è pari" : "il numero è dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 44;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
// mi piace piu cosi..
// if (val < 5) {
//   console.log("Il  valore è minore di 5");
// } else if (val >= 5 && val < 10) {
//   console.log("Il valore è maggiore o uguale a 5 ma minore di 10");
// } else {
//   console.log("Il valore è uguale a 10 o maggiore");
// }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100;
console.log(myArray);
