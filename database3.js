var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "papai",
  database: "test1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE student";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});