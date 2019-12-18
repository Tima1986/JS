function createLi(){
var li = document.createElement("li")
var ol = document.getElementsByTagName("ol")
li.innerText="HELLO WORLD!"
ol[0].appendChild(li)
}
createLi()