var a = new Object();
a.name = "Ivan";
a.surname = "Grishin";
a.sex = "male";

var b = new Object();
b.name = "Nikolay";
b.surname = "Seryi";
b.fathername = "Ivanovich";

var c = new Object();
c.name = "Svetlana";
c.surname = "Popova";
c.height = "171";

var persons = [{ name: "Semen", surname: "Dmitrenko" }];
persons.push(a, b, c);

var str = "<table border='1'>"
str += '<tr><td>Name</td><td>Surname</td></tr>';
for (var i=0;i<persons.length;i++){
    str += '<tr><td>'+persons[i].name+'</td><td>'+persons[i].surname+'</td></tr>'
}
str += "</table>"

console.log(str)
document.write(str)