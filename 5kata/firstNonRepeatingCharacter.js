function firstNonRepeatingLetter(s) {
  // Add your code here
  s = s.slice('');
  for (var i = 0; i < s.length; i++) {
    var isUnique = true;
    for (var j = 0; j < s.length; j++){
      if (s[i].toLowerCase() === s[j].toLowerCase() && i !== j){
        isUnique = false;
        break;
      }
    }
    if (isUnique) return s[i];
  }
  return '';
}