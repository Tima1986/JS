function endLetter(str) {
   return str.substr(0, str.length - 1)+str.charAt(str.length -1).toUpperCase();
}
console.log(endLetter('people'))