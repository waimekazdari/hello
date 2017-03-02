// normal function statement
function sayHi(){
  console.log("hi");
}
 //sayHi();

//pass a function into an other function
function callFunction(fun){
  fun();
}
 // function expression
 var sayBye = function(){
   console.log("bye");
 };
//sayBye();

callFunction(sayHi);
callFunction(sayBye);
