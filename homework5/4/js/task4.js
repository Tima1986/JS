var tag = prompt("Введите id тега");
function removeTagsById(tag) {
  var elemToDelete = document.getElementById(`${tag}`);
  if (elemToDelete === null) {
    return alert("Такого тега не существует");
  } else {
    return elemToDelete.parentNode.removeChild(elemToDelete);
  }
}
removeTagsById(tag);