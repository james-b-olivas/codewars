// Note: current solution code cannot handle array length 10000

function productSum(a, m) {
  // your code here
  var output = 0;
  var recurDown = function(product = 1, index = -1, count = 0) {
    if (m === count) {
      output += product;
    } else {
      for (var i = index + 1; i < a.length && i + m - count <= a.length; i++) {
          product *= a[i];
          recurDown(product, i, count + 1);
          product /= a[i];
      }
    }
  }
  recurDown();
  return output % 1000000007;
}