const http = require('http');
http.createServer((req,res)=>{
    res.write('<h1>this is nishu jha</h1>');
res.end("hello");
}).listen(4800);

http.createServer((req,res)=>{
    res.end('hii');
}).listen(4900);