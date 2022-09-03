function alphabetPosition(text) {
    const alphabets = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const result = text.toUpperCase().match(/[A-Z]/g)
  return result!==null?result.map(alphabet=>alphabet!==null?alphabets.indexOf(alphabet):null).join().replace(/,/g," "):''}

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}
