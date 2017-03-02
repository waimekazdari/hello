/* block script execution till 3000 mlSeconde have passed
setTimeout(function() {
console.log('3 seconds have passed ')
}, 3000);
*/
var time =0;
var timer = setInterval(function(){
  time += 3;
  console.log(time + 'seconds have passed');
  if(time > 5){
    clearInterval(timer);
  }
},3000);
