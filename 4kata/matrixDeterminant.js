function determinant(m) {
  // return the determinant of the matrix passed in
  var getMinor = function(index, matrix) {
    var minor = [];
    for (var i = 1; i < matrix.length; i++){
      var temp = [];
      for (var j = 0; j < matrix.length; j++){
        if (j !== index) {
          temp.push(matrix[i][j]);
        }
      }
      minor.push(temp);
    }
    return minor;
  };
  
  var recurDown = function(matrix){
    if (matrix.length === 1)
      return matrix[0][0];
    else if (matrix.length === 2)
      return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
    else {
      var sign = 1;
      var det = 0;
      for (var i = 0; i < matrix.length; i++){
        det += matrix[0][i] * recurDown(getMinor(i, matrix)) * sign;
        sign *= -1;
      }
      return det;  
    }
  
  };
  
  return recurDown(m);
  
};
