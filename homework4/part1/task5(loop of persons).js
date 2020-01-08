var a = new Object();
a.name = "";
a.surname = "";
a.sex = "";

var b = new Object();
b.name = "";
b.surname = "";
b.fathername = "";

var c = new Object();
c.name = "";
c.surname = "";
c.height = "";

var persons=[{name:"", surname:""}]
persons.push(a,b,c)

for (var i in persons){
    console.log(persons[i])
}