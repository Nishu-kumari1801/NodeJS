const http =require('http');
http.createServer((req,res)=>{
    // res.write("This is anil sidhu");
    res.write('<h1>Hello this is nishu jha</h1>')
    res.end("Hello");
}).listen(4800);