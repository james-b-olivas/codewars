function rideOfFortune(artifact,explorers){
  //your code goes here. you can do it!

  var ziggurat = artifact.map(row=>row.split(''));

  var ride = function(row) {
    var direction = 'east';
    var col = 0;
    while (col >= 0 && row >= 0 && col < ziggurat[0].length && row < ziggurat.length) {

      if (ziggurat[row][col] === 'A') {
        if (direction === 'west') {
          direction = 'north';
        } else if (direction === 'east') {
          direction = 'south';
        } else if (direction === 'south') {
          direction = 'east';
        } else if (direction === 'north') {
          direction = 'west';
        }
        ziggurat[row][col] = 'B';
      } else if (ziggurat[row][col] === 'B') {
        if (direction === 'west') {
          direction = 'south';
        } else if (direction === 'east') {
          direction = 'north';
        } else if (direction === 'south') {
          direction = 'west';
        } else if (direction === 'north') {
          direction = 'east';
        }
        ziggurat[row][col] = 'A';
      }

      if (direction === 'east') {
        col++;
      } else if (direction === 'south') {
        row++;
      } else if (direction === 'west') {
        col--;
      } else if (direction === 'north') {
        row--;
      }
    }

    if (col < 0) return null;
    else if (row < 0) {
      return [0, col];
    } else if (col >= ziggurat[0].length) {
      return [row, ziggurat[0].length - 1];
    } else if (row >= ziggurat.length) {
      return [ziggurat.length - 1, col];
    }

  }

  var exitPoints = [];

  for (var i = 0; i < explorers.length; i++) {
    exitPoints.push(ride(explorers[i]));
  }

  return exitPoints;
}