let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", addLink);
}
function addLink() {
  this.innerHTML = this.innerHTML + " (" + this.href + ") ";
}