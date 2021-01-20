var listaBiciclette = [
  {
    'nome': 'red',
    'peso': 10,
  },
  {
    'nome': 'blu',
    'peso': 12,
  },
  {
    'nome': 'green',
    'peso': 8,
  },
  {
    'nome': 'pink',
    'peso': 2,
  },
];
var biciLight = listaBiciclette[0];
for (var i = 1; i < listaBiciclette.length; i++) {
  if (listaBiciclette[i].peso < biciLight.peso) {
    biciLight = listaBiciclette[i];
  }
}
console.log(biciLight);


// jsnack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}


var listaSquadre = [
  {
    'nome': 'Lazio',
    'punti': randomNumber(0, 20),
    'falli' : randomNumber(0, 20),
  },
  {
    'nome': 'Roma',
    'punti': randomNumber(0, 20),
    'falli' : randomNumber(0, 20),
  },
  {
    'nome': 'Genoa',
    'punti': randomNumber(0, 20),
    'falli' : randomNumber(0, 20),
  },
  {
    'nome': 'Atalanta',
    'punti': randomNumber(0, 20),
    'falli' : randomNumber(0, 20),
  },
];

var arrayNomiPunti = [];
for (var i = 0; i < listaSquadre.length; i++) {
  arrayNomiPunti.push(listaSquadre[i].nome);
  arrayNomiPunti.push(listaSquadre[i].falli);
}
console.log(arrayNomiPunti);


// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function mixing(indiceminimo,array,indicemassimo){
  var nuovoArray =[];
  for (var i = indiceminimo; i < indicemassimo; i++) {
    nuovoArray.push(array[i])
  }
  console.log(nuovoArray);
  return nuovoArray;
}
var min = prompt('inserisci indice minimo');
var max = prompt('inserisci indice massimo');
var arrayNumber = ['gatto','cane','topo','mimmo','pippo','pluto','senior'];
mixing(min,arrayNumber,max);
