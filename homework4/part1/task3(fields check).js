var a = new Object();
a.name = "";
a.surname = "";
a.sex = "";
if (("sex" in a)===true) {
  alert("Найдены необязательные поля: " + a.sex);
}

var b = new Object();
b.name = "";
b.surname = "";
b.fathername = "";

var c = new Object();
c.name = "";
c.surname = "";
c.height = "";
