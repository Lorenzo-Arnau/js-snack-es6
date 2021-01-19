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
  il peso è di ${biciLight.peso} kg
  `);
