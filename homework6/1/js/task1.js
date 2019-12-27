document.body.style.height = "4000px";
setTimeout(function scrollDown() {
  window.scrollTo({
    top: 4000,
    behavior: "smooth"
  });
  setTimeout(scrollDown, 5000);
}, 3000);
setTimeout(function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  setTimeout(scrollUp, 5000);
}, 5000);
