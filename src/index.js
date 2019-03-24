module.exports = function getZerosCount(number, base) {
  var j = 1;
  var i = 2;
  var a = [];
  do { 
    if (base % i === 0) {
      a[j] = i;
      j++;
      base = base / i;
    } else {
      i++;
    }
  }
  while (i < base);

  a[j] = i;
  var res = [];
  a.forEach(function(e){
      res[e] = 1 + ~~res[e];
  })

  var nok = [];
  for(var k in res){
    nok.push([+k, res[k]]);  
  }
  
  var nullContainer = [];
  for (var w = 0; w < nok.length; w++ ) {
    var summ = 0;
    var nk = 1;
    for (var l = 1; nk >= 1; l++) { 
      nk = Math.floor(number / Math.pow(nok[w][0], l));
      summ += nk;
    }
    nullContainer.push(Math.floor(summ / nok[w][1])); 
  } 

  return nullContainer.sort(function(o, p){
    return o - p;
  })[0];
}

