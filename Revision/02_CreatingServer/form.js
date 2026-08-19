const http=require('http');
const fs=require('fs');
const queryString = require('querystring')

http.createServer((req, res) => {

    fs.readFile('html/form.html', 'utf-8', (error, data) => {

        if (error) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { "content-type": "text/html" });

        if (req.url === '/') {
            res.write(data);
        } 
        else if (req.url === '/submit') {
            let dataBody=[]
            req.on('data',(chunks)=>{
                dataBody.push(chunks);
            });
            req.on('end',()=>{
                let rowData=Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rowData);
                console.log(readableData);
            })
            res.write('<h1>Data Submitted</h1>');
        }

        res.end();  
    });

}).listen(3200);

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":'text/html'})
//     console.log(req.url);
//     if(req.url=='/'){
//         res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name="name" />
//         <input type="text" placeholder="enter email" name="email" />
//         <button>Submit</button>
//          </form>
//         `);
//     }else if(req.url=='/submit'){
//         res.write('<h1>Data Submitted</h1>')
//     }
    
//     res.end();
// }).listen(3200);