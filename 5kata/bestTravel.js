function chooseBestSum(t, k, ls) {
  // your code
  var bestSum = -1;


  var recurDown = function(count=0, index=-1, sum=0){
    if (count === k) {
      if (sum <= t && sum > bestSum)
        bestSum = sum;
    } else {
      for (var i = index+1; i < ls.length; i++) {
        recurDown(count+1, i, sum+ls[i]);
      }
    }
  };

  recurDown();
  if (bestSum === -1) return null;
  return bestSum;
}