const http = require('http');
const usersData =[
    {
        name:'nishu',
        age:20,
        email:'nushu@test.com'
    },
    {
        name:'sam',
        age:70,
        email:'sam@test.com'
    },
    {
        name:'bruce',
        age:90,
        email:'bruce@test.com'
    }
]
http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/JSON')
    res.write(JSON.stringify(usersData));
    res.end();
}).listen(4800);