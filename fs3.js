var fs = require('fs')
var data = fs.readFileSync('file1.txt','utf8',function(err,data){
    if(err)
    console.log(err);

    console.log(data);
});
console.log('the file is read');
fs.writeFile('file2.txt',data,function(err,data){
          if(err)
     return console.error(err);

     console.log('Done...!!')
 })