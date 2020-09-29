function solveExpression(exp) {
  for (var digit = 0; digit <= 9; digit++) {
    var tempExp = exp.split('');
    for (var i = 0; i < tempExp.length; i++) {
      if (tempExp[i] === '?' && exp.search(digit) === -1) {
        tempExp[i] = digit;
      }
    }
    tempExp = tempExp.join('');
    var operation = tempExp.split('=')[0];
    var value = tempExp.split('=')[1];
    var left, right;
    if (parseInt(value).toString() === value) {
      if (operation.search('\\+') !== -1) {
        left = operation.split('+')[0];
        right = operation.split('+')[1];
        if ((parseInt(left) === 0 && left.length > 1) || (parseInt(right) === 0 && right.length > 1)) {
          continue;
        } else if (parseInt(left) + parseInt(right) === parseInt(value)) {
          return digit;
        }
      } else if (operation.search('\\*') !== -1) {
        left = operation.split('*')[0];
        right = operation.split('*')[1];
        if ((parseInt(left).toString() !== left) || (parseInt(right).toString() !== right)) {
          continue;
        } else if (parseInt(left) * parseInt(right) === parseInt(value)) {
          return digit;
        }
      } else if (operation.search('\\/') !== -1) {
        left = operation.split('/')[0];
        right = operation.split('/')[1];
        if ((parseInt(left) === 0 && left.length > 1) || (parseInt(right) === 0 && right.length > 1)) {
          continue;
        } else if (parseInt(left) / parseInt(right) === parseInt(value)) {
          return digit;
        }
      } else if (operation.search('\\-') !== -1) {
        var slicePoint;
        for (var i = 1; i < operation.length; i++) {
          if (operation[i] === '-') {
            slicePoint = i;
            break;
          }
        }
        left = operation.slice(0, slicePoint);
        right = operation.slice(slicePoint + 1);
        console.log(left);
        if ((parseInt(left) === 0 && left.length > 1) || (parseInt(right) === 0 && right.length > 1)) {
          continue;
        } else if (parseInt(left) - parseInt(right) === parseInt(value)) {
          return digit;
        }
      }
    }
  }
  return -1;
}