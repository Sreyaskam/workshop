var express = require('express');
var router = express.Router();
var mysql=require('mysql');


 
router.get('/', function(req, res, next) {
    console.log('got')
    var mqtt = require('mqtt')
    var client  = mqtt.connect('mqtt://iot.eclipse.org')
    client.on('connect', function () {
  client.subscribe('web2dev', function (err) {
    if (!err) {
      client.publish('web2dev', req.query.msg)
    }
  })
})

client.on('message', function (topic, message) {
    // message is Buffer
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "papai",
      database: "Test1"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
  var sql = "INSERT INTO Student (Name, Bontact) VALUES ?";
    var values = [["sreyas","75668"]];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
      });
    });
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "papai",
      database: "test2"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO student (name, contact) VALUES ?";
        var values = [["sreyas","7688"]];
      con.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
    console.log(message.toString())
    client.end()
  })
});
module.exports = router;