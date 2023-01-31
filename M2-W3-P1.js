/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(4, 5));

//ALTRO METODO

const area = function (l1, l2) { //crea la funzione
    return l1 * l2;              //calcola l'area
}
const areaResult = area(3, 4);   //crea una costante che assegna alla funzione area con i valori

console.log(areaResult);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

console.log(crazySum(4, 5));


/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num){
    const fisso = 19;
    if (Math.abs(num - fisso) > 19) {
        return Math.abs(num - fisso) * 3; 
    } else {
        return Math.abs(num - fisso);
    }
}

console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(int) {
    if ( (20 < int && int >= 100) || (int === 400)) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(25));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(stringa) {
    stringa = "code" + stringa;
    if (stringa)
}


const codify2 = function(str) {
    if (str.startsWith("code")) { //startsWith controlla se la stringa inizia con un determinato prefisso o carattere
        return str;
    } else {
        return "code" + str;
    }
}

console.log(codify2("coders"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(int) {

}

const check3and7 = function(n){
    if(n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    return stringa.split('').reverse('').join(''); //split trasforma la stringa in un array, reverse inverte la stringa e la join
}

console.log(reverseString("ciao"));


/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirstPhrase = function(str){
    let words = str.split(' ')
    let finalString = []
    for (let i = 0; i < words.lenght; i++) {
        let firstChar = words[i].charAt(0)
        console.log(firstChar)
        let uppercaseChar = firstChar.toUpperCase()
        let cutString = words[i].slice(1)
        let finalWord = uppercaseChar + cutString
        finalString.push(finalWord)
    } console.log(finalString.join(""))
}

upperFirstPhrase("hello word");

//VERSIONE ALTERNATIVA

console.log("esercizio 8")
function upperFirst(str1) {
    const wordArray = str1.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i]
        wordArray[i] = currentWord.replace(currentWord[0], currentWord[0].toUpperCase());
    }
    return wordArray.join(" ");
}


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(str) {
    return str.slice(1,str.length - 1);
}

console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(n) {
    const arr = [];
    for (let i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() *10))
    }
    return arr
}
console.log(giveMeRandom(5))