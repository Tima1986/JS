function $(selector) {
  if (selector.startsWith("#")) {
    var sel = selector.slice(1);
    return document.getElementById(sel);
  } else if (selector.startsWith(".")) {
    var sel1 = selector.slice(1);
    el = document.getElementsByClassName(sel1);
    if (el.length === 1) {
      return el[0];
    } else {
      return el;
    }
  } else {
    return document.getElementsByTagName;
  }
}
console.log($(".two"));
