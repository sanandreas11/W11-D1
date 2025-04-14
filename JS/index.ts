//1)Quali sono i tipi primitivi principali in TypeScript?
//i tipi primitivi di typescript sono: stringhe, numeri, booleani, undefined e null
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let firstName: string = "Andrea"
let eta: number = 24
let StudiaTypeScript: boolean = true
//3) Tipizza il parametro della seguente funzione:
const greet = (name: string) => {
  return "Ciao " + name
}
//4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number): number => {
  return a + b
}
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const IVAPrice = function (price: number) {
  return price * 1.22
}
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const wordsLength = function (word1: string, word2: string) {
  const wordsTogether = word1 + word2
  return wordsTogether.length
}
//7) Cos'è un Type Union e come si scrive?
//un type union offre a una variabile diverse tipologie di dato ad esempio:
let valore: string | number
valore = "ciao"
valore = 42
//8) Crea una variabile che possa contenere un numero, null o undefined.
let Chester: number | null | undefined
Chester = 18
Chester = null
Chester = undefined
//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiorniDellaSettimana =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica"

//10) Tipizza il seguente array di numeri:
const numbers: number[] = [1, 2, 3]

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const Tupple: [string, string, string, number, number] = [
  "Mario",
  "Luigi",
  "Bowser",
  360,
  420,
]
