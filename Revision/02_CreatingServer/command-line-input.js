const arg=process.argv;

const http=require('http');

// console.log(arg[2]);
const port = arg[2];
http.createServer((req,res)=>{
    res.write("testing input from cmd")
    res.end();
}).listen(port);



console.log("===================" , arg);