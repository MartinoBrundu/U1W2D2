/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 25
let num2 = 30
let bigger

if ( num1 > num2 ) 
   { bigger = num1 } 
else {bigger =  num2}
console.log (bigger)


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let num4 = 7

if (num4 !== 5) { console.log ('not equal')

} else {console.log('equal')}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let divisory = 50
const result = (divisory %5 )


if (result !== 0) {console.log ('non divisibile')} 
else {console.log('divisibile per 5') }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 4
let num6 = 12

if ( num5 === 8 || num6 === 8 || num6 - num5 === 8 || num6 + num5 === 8  || num5  - num6 === 8) {console.log ('Verificato!')}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let num7 = 18
let num8 = 20
let num9 = 15
let totalShoppingCart = (num7+num8+num9)
let shippingCost = 10


if ( totalShoppingCart > 50) {shippingCost=0}
else {shippingCost} 
 let totale1 = (totalShoppingCart + shippingCost )
console.log(totale1)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let num10 = 18
let num11 = 20
let num12 = 15
let totalShoppingCart2 = (num10+num11+num12)
let spedizione1 = 10


let totale3 = ( totalShoppingCart2 - ( (totalShoppingCart2 / 100) *20) )
if (totale3 > 50) {spedizione1 = 0 }
console.log (totale3 + spedizione1)






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
// */
// let1 = 70
// let2 = 20
// let3 = 30
// if (let1 > let2) 
// 
// 

let x1= 10
let x2= 20
let x3= 30

if (x1 < x2) 
  {if (x1 < x3)
    {if(x2 < x3)
    {console.log(x1 , x2 , x3)}else{console.log(x1 , x3 , x2) } } else{console.log(x3, x1, x2)} } 
else {if(x1<x3) {console.log(x1 , x2 , x3)} else{if(x2<x3) {console.log(x2, x3 , x1) } else{console.log(x3, x2,x1)} } }





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numberX = "ciaone"
console.log(typeof numberX)



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number16 = 23432523

if ( number16 % 2 === 0) {console.log('numero pari')}
else {console.log('numero dispari')}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
   console.log("Meno di 5"); } else {
     console.log("Uguale a 10 o maggiore");
    }
*/

// let val = 7 
// if (val < 10) {console.log('meno di 10')}
// else if (val < 5) {console.log(' Meno di 5')}
// else {console.log('Uguale a 10 o maggiore ')}

let val = 15 
 if (val < 5) {console.log(' Meno di 5')}
else if  (val < 10) {console.log('meno di 10')}
else {console.log('Uguale a 10 o maggiore ')}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}


me.city = 'New York'


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

 delete me.lastName


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

 delete me.skills[2]
 console.log(me)

 /* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/



const firstarray = []

firstarray.push (1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 )

console.log(firstarray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

firstarray[9 ] = 100
console.log(firstarray)



