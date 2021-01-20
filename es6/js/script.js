const listaBiciclette = [
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

let biciLight = listaBiciclette[0];
for (let i = 1; i < listaBiciclette.length; i++) {
  if (listaBiciclette[i].peso < biciLight.peso) {
    biciLight = listaBiciclette[i];
  }
}
console.log(
  `
  il peso della bici leggera è di ${biciLight.peso} kg
  `);

  // Snack 2
//   Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
  function randomNumber(min, max) {
    let result = Math.floor(Math.random() * (max + 1 - min) + min);
    return result;
  }

  let listaSquadre = [
    {
      nome: 'Lazio',
      punti : 0,
      falli : 0,
    },
    {
      nome: 'Roma',
      punti : 0,
      falli : 0,
    },
    {
      nome: 'Genoa',
      punti : 0,
      falli : 0,
    },
    {
      'nome': 'Atalanta',
      punti : 0,
      falli : 0,
    },
  ];

  let newListaSquadre = [];
  for (let i = 0; i < listaSquadre.length; i++) {
    let thisTeam = listaSquadre[i];
    thisTeam.falli = randomNumber(0, 20);
    thisTeam.punti = randomNumber(0, 20);
    let {nome,falli} = listaSquadre[i];
    newListaSquadre.push({nome,falli})
  }
  console.log(newListaSquadre);


  // jsnack 3
  // Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
  const min = prompt('inserisci indice minimo');
  const max = prompt('inserisci indice massimo');
  const arrayNumber = ['gatto','cane','topo','mimmo','pippo','pluto','senior'];
  function mixing(indiceminimo,array,indicemassimo){
    // --------------------VERSIONE FOREACH--------------------
    // const nuovoArray =[];
    // array.forEach((item,i) => {
    //   if (i <= indicemassimo && i >= indiceminimo) {
    //     nuovoArray.push(item)
    //   }
    // });
    // --------------------VERSIONE FILTER--------------------
    const newArray = array.filter((elemento,indice,array) => {
      return indice <= indicemassimo && indice >= indiceminimo;
      })
      console.log(newArray);
      return newArray;
    }
  mixing(min,arrayNumber,max);
