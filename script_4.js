const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Script 4.1 : 70's
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
entrepreneurs.forEach(i => {
  if (i.year >= 1970 && i.year<=1979){
    console.log(i.first + " " + i.last + " " + i.year);
  }
})
console.log("");

// Script 4.2 : array
console.log("Sors un array qui contient le prénom et le nom des entrepreneurs ;")
let stars = []
entrepreneurs.forEach(i => {
  stars.push(i.first + " " + i.last);
  })
console.log(stars);
console.log("");


console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(i => {
  console.log(i.first + " " + i.last + " " + (2022 - i.year) + " ans")
});
console.log("");

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
let tab = []
  tab = entrepreneurs.sort((a,b) => a.last.localeCompare(b.last)); // méthode de trie : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  tab.forEach(i => {
    console.log(i.first + " " + i.last + " " + i.year);
  });