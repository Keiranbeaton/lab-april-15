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
};

sumArray = function(array) {
  console.table(array);
  console.log('\"' + array[0] + ',' + array[1] + ',' + array[2] + ' was passed in as an array of numbers, and ' + sum(array[0] + array[1], array[2]) + ' is their sum.\"');
  return sum(array[0] + array[1], array[2]);
};

multiplyArray = function(array) {
  console.table(array);
  console.log('\"' + array[0] + ', ' + array[1] + ', ' + array[2] + ' have a product of ' + multiply(array[0] * array[1], array[2]) + '.\"');
  return multiply(array[0] * array[1], array[2]);
};
