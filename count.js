var counter = function(arr){
  return 'there are :'+ arr.length +' elements in this array';
};

var adder = function(a,b){
  return a+b
};

var pi = 3.142;
/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/
// we can use also this methode :
module.exports = {
counter : counter,
adder : adder,
pi : pi
};
