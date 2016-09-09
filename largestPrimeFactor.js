exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  primeNumber  = 2;
  while (primeNumber <= n){
    if (n%primeNumber === 0){
        n /= primeNumber;
    } else {
      primeNumber++;
    }
  }

  return primeNumber;
};