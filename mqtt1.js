var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')
                          //broker address
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })