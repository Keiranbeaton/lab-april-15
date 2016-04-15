function sum(a, b) {
  var sumVar  = document.getElementById('sumId')
  sumVar.textContent = ('\"The sum of ' + a + ' and ' + b + ' is ' + (a + b) + '.\"')
  return a + b;
};

function multiply(c, d) {
  var multiplyVar = document.getElementById('multiplyId');
  multiplyVar.textContent = ('\"The product of ' + c + ' and ' + d + ' is ' + (c * d) + '.\"');
  return c * d;
};

function sumAndMultiply(e, f, g) {
  var add = sum(sum(e, f), g);
  var product = multiply(multiply(e, f), g);
  var sumVarTwo = document.getElementById('sumIdTwo');
  var multiplyVarTwo = document.getElementById('multiplyIdTwo');
  sumVarTwo.textContent = ('\"' + e + ' and ' + f + ' and ' + g + ' sum to ' + add + '.\"');
  multiplyVarTwo.textContent = ('\"The numbers ' + e + ' and ' + f + ' and ' + g + ' have a product of ' + product + '.\"');
  return [add, product];
};

 function sumArray(array) {
  console.table(array);
  var arraySum = 0;
  for( i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  var sumArrayVar = document.getElementById('sumArrayId');
  sumArrayVar.textContent = ('\"' + array.join(', ') + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.\"')
  return arraySum;
};

function multiplyArray(array) {
  console.table(array);
  var arrayProduct = 1;
  for ( i = 0; i < array.length; i++) {
    arrayProduct *= array[i];
  }
  var multiplyArrayVar = document.getElementById('multiplyArrayId');
  multiplyArrayVar.textContent = ('\"' + array.join(', ') + ' have a product of ' + arrayProduct + '.\"');
  return arrayProduct;
};
