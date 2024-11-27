const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b];
console.log("c: ", JSON.stringify(c));

const d = c.filter((e) => e !== 3);
console.log("d: ", JSON.stringify(d));

const objectD = d.map((elem, index) => ({ index, value: elem }));
console.log("objectD: ", objectD);

const product = objectD.reduce((acc, obj) => acc * obj.value, 1);
console.log("Produkt: ", product);

const students = [
  { name: "Marko", grade: 3 },
  { name: "Luka", grade: 4 },
  { name: "Ivana", grade: 5 },
  { name: "Lana", grade: 2 },
];
console.log(students);

const sumaOcjena = students
  .map((elem) => elem.grade)
  .filter((value) => value >= 4)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Suma ocjena: ", sumaOcjena);

const prices = {pizza:30, burger: 20, pasta: 25, juice:10, fish:40};
const {pizza:calzone, pasta, beer=12, ...other} = prices

console.log("calzone: ", calzone);
console.log("pasta: ", pasta);
console.log("beer: ", beer);
console.log("other: ", other);

console.log(`Calzone costs ${calzone}kn, pasta ${pasta}kn, which is ${calzone + pasta}kn in total.`)