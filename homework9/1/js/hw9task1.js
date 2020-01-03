let link = document.getElementsByTagName("a");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseover', title);
}
function title() {
  this.title = this.innerHTML;
}
