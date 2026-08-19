const http = require('http');
const age=29;
http.createServer((req,res)=>{
    res.setHeader('Content-Type',"text/html");
   res.write(`
    <html>
    <head>
    <title>Code step by step</title>
    </head>
    <body>
    <h1>Hello Nishu jha</h1>
    <h2>`+age+`</h2>
    <h2>`+new Date()+`</h2>
    </body>
    </html>
    `)
   res.end();
   //here process.end() is used for clean exit 
}).listen(4800);