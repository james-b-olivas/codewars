function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9      
  var columnMap = [];
  for (var i = 0; i < 9; i++) {
    var temp = [];
    for (var j = 0; j < 9; j++) {
      temp.push(puzzle[j][i]);
    }
    columnMap.push(temp);
  }
  var map3x3 = function(x, y) {
    var map = {};
    x -= x % 3;
    y -= y % 3;
    console.log(x, y);
    for (var i = x; i < x + 3; i++) {
      for (var j = y; j < y + 3; j++) {
        map[puzzle[i][j]] = puzzle[i][j];
      }
    }
    return map;
  }
  var recurDown = function(i = 0, j = 0) {

    if (i === 8 && j === 8 && puzzle[i][j] !== 0) {
      return true;
    }
    
    if (puzzle[i][j] === 0) {
      for (var k = 1; k < 10; k++) {
        if (!puzzle[i].includes(k) && !columnMap[j].includes(k) && !map3x3(i, j).hasOwnProperty(k)) {
          puzzle[i][j] = k;
          columnMap[j][i] = k;
          if (i === 8 && j === 8) {
            return true;
          } else {
            if (recurDown((j === 8) ? i+1: i, (j === 8) ? 0: j+1) === true) {
              return true;
            };
          }
          puzzle[i][j] = 0;
          columnMap[j][i] = 0;
        }
      }
    } else {
      return recurDown((j === 8) ? i+1: i, (j === 8) ? 0: j+1);
    }
  }
  recurDown();
  return puzzle;
}
