function create(tag) {
  return document.createElement("div");
}
function insertTag(tag) {
  document.body.append(create(tag));
}
