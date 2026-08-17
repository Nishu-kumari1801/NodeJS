const http=require('http');

const age=19;
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
        <head>
        <title>code step by step</title>
        </head>
        <body>
        <h1>Hii , i m nishu jha</h1>
        <h2>`+age+`</h2>
        <h2>`+new Date()+`</h2>
        </body>
        </html>
        `)
    res.end();
})

server.listen(4800);