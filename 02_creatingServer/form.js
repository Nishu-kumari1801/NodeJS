const http = require("http");
const fs = require("fs");
const queryString = require('querystring');

http
  .createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      ;
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Internal server error");
        return;
      }
        res.writeHead(200, { "Content-Type": "text/html" })

      if (req.url == "/") {
        res.write(data);
      } else if (req.url == "/submit") {
        let dataBody=[]
        req.on('data',(chunk)=>{
           dataBody.push(chunk);
        })
        res.on('end',()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);
            console.log(readableData);
            let dataString = "My name is "+readableData.name+" my email id is "+readableData.email;
            console.log(dataString);
            fs.writeFileSync("text/"+readableData.name+".txt",dataString);
            console.log("file created")

        })
        res.write("<h1>Data submitted</h1>");
      }
      res.end();
    });
  })
  .listen(3200);

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     console.log(req.url);

//     if(req.url == '/'){
//     res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name='name'/>
//         <input type="password" placeholder="enter password" name='password'/>
//         <button>Submit</button>
//         </form>
//         `);
//     }
//     else if (req.url == '/submit'){
//         res.write("<h1>Data submitted</h1>");
//         res.end();
//     }
//     res.end();
// }).listen(3200)
