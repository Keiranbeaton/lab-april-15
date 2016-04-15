sum = function (numberOne, numberTwo) {
  //console.log('\"The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne + numberTwo) + '.\"');
  return numberOne + numberTwo;
};

multiply = function (numberOne, numberTwo) {
  //console.log('\"The prodcut of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne * numberTwo) + '.\"');
  return numberOne * numberTwo;
};

sumAndMultiply = function(numberOne, numberTwo, numberThree) {
  var add = sum(sum(numberOne, numberTwo), numberThree);
  var product = multiply(multiply(numberOne, numberTwo), numberThree);
  console.log('\"' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + add + '.\"');
  console.log('\"The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + product + '.\"');
  return [add, product];
};

sumArray = function(array) {
  console.table(array);
  var arraySum = 0;
  for( i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  console.log('\"' + array.join(', ') + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.\"')
};

multiplyArray = function(array) {
  console.table(array);
  var arrayProduct = 1;
  for ( i = 0; i < array.length; i++) {
    arrayProduct *= array[i];
  }
  console.log('\"' + array.join(', ') + ' have a product of ' + arrayProduct + '.\"');
  return arrayProduct;
};
