var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked',function(){
    console.log('clicked emmited');
})

eventEmitter.emit('clicked')