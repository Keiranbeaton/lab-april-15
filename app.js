sum = function (numberOne, numberTwo) {
  //console.log('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne + numberTwo) + '.\"');
  return numberOne + numberTwo;
};

multiply = function (numberOne, numberTwo) {
  //console.log('\"The prodcut of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne * numberTwo) + '.\"');
  return numberOne * numberTwo;
};

sumAndMultiply = function(numberOne, numberTwo, numberThree) {
  console.log('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + sum(numberOne + numberTwo, numberThree) + '.\"');
  console.log('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + multiply(numberOne * numberTwo, numberThree) + '.\"');
  return [sum(numberOne + numberTwo, numberThree), multiply(numberOne * numberTwo, numberThree)];
}
