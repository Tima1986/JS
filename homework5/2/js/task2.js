function create(tag){
  return document.createElement(tag);
}
var el = create("div")
function insertTag(tag) {
  return document.body.append(el);
}