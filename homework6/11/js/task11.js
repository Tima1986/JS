function addElement() {
  var tag = document.getElementsByClassName("www");
  for (var i = 0; i < tag.length; i++) {
    tag[i].innerText = tag[i].innerText + tag[i].tagName.toLowerCase();
  }
}
addElement();
