const http = require('http')

const usersData=[
    {
        name:'nishu',
        age:19,
        email:'nishu@test.com'
    },
    {
        name:'sam',
        age:20,
        email:'sam@test.com'
    },
    {
        name:'bittu',
        age:40,
        email:'bittu@test.com'
    }
]
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(usersData));
    res.end();
}).listen(6100);