function removeLastChild() {
  var elem = document.getElementsByTagName("ol");
  return elem[0].removeChild(elem[0].lastElementChild);
}
setTimeout(removeLastChild, 3000);