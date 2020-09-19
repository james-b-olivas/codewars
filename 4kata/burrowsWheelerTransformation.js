function encode(s) {
  if (s.length === 0) return [s, -1];
  var matrix = [];
  for (var i = s.length - 1; i >= 0; i--) {
    matrix.push(s.slice(i) + s.slice(0, i));
  }
  matrix = matrix.sort();
  console.log(matrix);
  var outputStr = '';
  var outputInt = -1;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i] === s) {
      outputInt = i;
    }
    outputStr += matrix[i].slice(matrix.length-1);
  }
  return [outputStr, outputInt];
}

function decode(s,i) {
  if (s.length === 0) return s;
  var lastColumn = s.split('');
  var table = lastColumn.sort();
  for (var k = 0; k < table.length - 1; k++) {
    for (var j = 0; j < table.length; j++) {
      table[j] = s[j] + table[j];
    }
    table.sort();
  }
  return table[i];
}
