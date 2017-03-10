var events = require('events');
/*var myEvent = new events.EventEmitter();

myEvent.on('someEvent',function(msg){
  console.log(msg);
});
myEvent.emit('someEvent',"the event was emitted");
*/

var util = require('util');

var Persone = function(name){
  this.name = name;
};

util.inherits(Persone, events.EventEmitter);

var wiame = new Persone('wiame');
var nora = new Persone('nora');
var affaf = new Persone('affaf');

var people = [wiame,nora, affaf];

people.forEach(function(persone){
  persone.on('speak',function(msg){
    console.log(persone.name + ' said : ' + msg);
  });
});
wiame.emit('speak','hey dudes');
nora.emit('speak','hey boys how are yaa !!');
