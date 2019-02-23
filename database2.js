var mysql = require('mysql');

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
    var values = [["rohit","80137"]];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});