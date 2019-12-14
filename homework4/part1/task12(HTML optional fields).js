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
for (var i=0;i<persons.length;i++){
    for (var x in i){
    str += '<tr><td>'+i.x+'</td></tr>'
str += "</table>"
}
console.log(str)
document.write(str)