const names = ["Aleksandr", "Semen", "Igor", "Anna", "Artem"];
const lastNames = ["Petrov", "Govorov", "Vorob'ev", "Vernikova", "Odintsov"];
const newArray = [];
function persons(name, lastName) {
  for (let i in name) {
    newArray.push(name[i] + " " + lastName[i]);
  }
  console.log(newArray);
}
console.log(persons(names, lastNames));

console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);
console.log(newArray[4]);
