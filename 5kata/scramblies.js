function scramble(str1, str2) {
  //code me
 var set1 = {}, set2 = {};
 for (var i = 0; i < str1.length; i++){
    if (!set1.hasOwnProperty(str1[i]))
      set1[str1[i]] = 0;
     set1[str1[i]]++;
  }
  for (var i = 0; i < str2.length; i++){
    if (!set2.hasOwnProperty(str2[i]))
      set2[str2[i]] = 0;
     set2[str2[i]]++;
  }
  for (var i in set2){
    if (!set1.hasOwnProperty(i) || set1[i] < set2[i])
      return false;
  }
  return true;
 }