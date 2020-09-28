function ipsBetween(start, end){
  //TODO
  start = start.split('.').map(i=>parseInt(i));
  end = end.split('.').map(i=>parseInt(i));;
  var startSum = 0;
  var endSum = 0;
  for (var i = 0; i < start.length; i++) {
    startSum += Math.pow(256, 3-i) * start[i];
    endSum += Math.pow(256, 3-i) * end[i];
  }
  return endSum - startSum;
}