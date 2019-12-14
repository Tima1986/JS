var a = prompt("Введите cсылку на картинку");
while ((a.indexOf("http:")==-1)&&(a.indexOf("https:")==-1)){
    var a = prompt("Введите cсылку на картинку")
}
  var b = parseInt(prompt("Введите число (градус поворота"));
while (isNaN(b)){
   var b = parseInt(prompt("Введите число (градус поворота"));
}
document.getElementById('myImg').src = a;
document.getElementById('myImg').style.transform=`rotate(${b}deg)`;

var c = 0

for (var i = 1; i <= 5; i++) {
 var img = document.createElement('img')
 img.src = a
 document.body.appendChild(img)
 c+= +b
 img.style.transform = `rotate(${c}deg)`
}
