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

var persons=[{name:"Semen", surname:"Dmitrenko"}]
persons.push(a,b,c)

for (var i of persons){
    for (var x in i){
    console.log(i[x]);
    }
}