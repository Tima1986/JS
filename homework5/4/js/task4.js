var i = prompt("Введите id тега")
function removeTags(){
var elem = document.getElementById(`${i}`);
if (elem===null){
    alert("Такого тега не существует")
    }
else {
    elem.remove();
}
}
removeTags()