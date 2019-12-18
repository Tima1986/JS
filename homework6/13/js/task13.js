function createToUPLi(){
    var li = document.createElement("li")
    var ul = document.getElementsByTagName("ul")
    var elem = document.getElementById('myunique'); 
    li.innerText="!!!"
    ul[0].insertBefore(li, elem)
    }
    createToUPLi()