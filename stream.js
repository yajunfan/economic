var fs = require('fs');
var data='';
var writeData = "新写入的东西";
var readsteam = fs.createReadStream('input.txt');
//var writeSream = fs.createWriteStream('input.txt');
var writeSream1 = fs.createWriteStream('output.txt',{'flags':data}); ;
 readsteam.setEncoding('UTF8');
//writeSream.write(writeData,'UTF8');
readsteam.on('data',function(chunk){
    data+=chunk;
   
    
 });
// readsteam.on('end',function(){
//     console.log(1,data);
// });
// readsteam.on('error',function(){
//     console.log(2,err.stack);
// });
// readsteam.on('finish',function(chunk){
//    console.log('写入成功');
// });
readsteam.pipe(writeSream1);
console.log('程序执行完毕');
