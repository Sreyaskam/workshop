var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked',function(button){
    console.log(button+' clicked emmited');
})

eventEmitter.emit('clicked','button1')