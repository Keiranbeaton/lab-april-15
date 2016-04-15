sum = function (numberOne, numberTwo) {
  var sum = numberOne + numberTwo;
  //console.log('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum + '.\"');
  return sum;
};

multiply = function (numberOne, numberTwo) {
  var product = numberOne * numberTwo;
  //console.log('\"The prodcut of ' + numberOne + ' and ' + numberTwo + ' is ' + product + '.\"');
  return product;
};

sumAndMultiply = function(numberOne, numberTwo, numberThree) {
  var add = sum(sum(numberOne, numberTwo), numberThree);
  var product = multiply(muliply(numberOne, numberTwo), numberThree);
  console.log('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + add + '.\"');
  console.log('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + product + '.\"');
  return [add, product];
};
