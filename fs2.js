var fs = require('fs')
var data = fs.readFile('file2.txt','utf8',function(err,data){
    if(err)
    console.log(err);

    console.log(data);
});
console.log('the file is read');

