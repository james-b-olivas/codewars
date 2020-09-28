var scoreBreakdowns = function(score) {
  var output = [];
  var scoreMap = ['td', 'tp', 'ep', 'fg', 's'];
  var scores = [6, 2, 1, 3, 2];
  var recurDown = function(score, index = 0, combo = { td: 0, tp: 0, ep: 0, fg: 0, s: 0}) {
    if (score === 0) {
      var newCombo = {};
      for (var i in combo) {
        newCombo[i] = combo[i];
      }
      output.push(newCombo);
    } else {
      for (var i = index; i < scores.length; i++) {
        if (scores[i] <= score) {
          combo[scoreMap[i]]++;
          if (combo.tp + combo.ep <= combo.td) {
            recurDown(score-scores[i], i, combo);
          }
          combo[scoreMap[i]]--;
        }
      }
    }
  };
  recurDown(score);
  return output;
};