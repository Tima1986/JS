var a = new Object();
a.name = "Ivan";
a.surname = "Grishin";
a.sex = "";

var b = new Object();
b.name = "Nikolay";
b.surname = "Seryi";
b.fathername = "";

var c = new Object();
c.name = "Svetlana";
c.surname = "Popova";
c.height = "";

var persons=[{name:"Semen", surname:"Dmitrenko"}]
persons.push(a,b,c)

for (var i of persons){
    console.log(i.name, i.surname)
}