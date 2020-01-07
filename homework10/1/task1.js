let group = [
  {
    name: "Alexsandr",
    lastName: "Men'shov",
    age: 20,
    notebook: false
  },
  {
    name: "Sergey",
    lastName: "Trofimov",
    age: 22,
    notebook: true
  },
  {
    name: "Svetlana",
    lastName: "Samoilova",
    age: 21,
    notebook: true
  },
  {
    name: "Tatyana",
    lastName: "Obdulaeva",
    age: 19,
    notebook: false
  },
  {
    name: "Mikhail",
    lastName: "Romanov",
    age: 20,
    notebook: false
  }
];

function getStudentsList(arrayOfStudents) {
  let valueOfString = arrayOfStudents
    .map(i => Object.values(i).join(", "))
    .forEach(i => console.log(i));
}
getStudentsList(group);
