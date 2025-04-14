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
//12) Qual è la differenza tra type e interface?
//type va usato per le unioni mentre inteface va usato per la creazione dei oggetti
//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age"
interface Persona {
  firstName: string
  lastName: string
  age: number
}
//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente extends Persona {
  email: string
  phone?: string
}
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  nome: string
  voto: number
}

const studenti: Studente[] = [
  { nome: "Luca", voto: 28 },
  { nome: "Sara", voto: 30 },
]
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  marca: string
  modello: string
}

interface Auto extends Veicolo {
  targa: string
}
//17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto: Auto = {
  marca: "Toyota",
  modello: "Yaris",
  targa: "MRPL8S",
}
//18) Cosa sono i Generics in TypeScript?
//i generics vanno usati nei oggetti per modificare il loro tipo di valore dinamicamente ad esempio:
interface PCPlatforms {
  steam: boolean
  epic: boolean
  goog: boolean
}

interface game<A> {
  name: string
  price: number
  isItOnPC: A
}

//19) È possibile avere più tipi generici in un'interfaccia?
//Sì
interface Coppia<A, B> {
  primo: A
  secondo: B
}
//20)

export interface OmdbData {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

const omdbUrl = "https://www.omdbapi.com/?apikey=24ad60e9&i=tt1201607"

const getMovieInfo = function () {
  fetch(omdbUrl)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("errore")
      }
    })
    .then((data:OmdbData) => {
      data.
    })
    .catch((err) => {
      console.log(err)
    })
}
