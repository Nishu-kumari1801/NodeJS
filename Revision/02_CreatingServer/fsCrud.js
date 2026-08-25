const fs = require('fs');

const operation =  process.argv[2];
if(operation=='write'){
    const name = process.argv[3];
    const content = process.argv[4];
    console.log(operation,name,content);
    const fullName ="files/"+name+".txt"
   fs.writeFileSync(fullName,content);
}else if(operation=='read'){
    const name = process.argv[3];
    const fullName ="files/"+name+".txt"
    let data = fs.readFileSync(fullName,'utf-8');
    console.log(data);
}else if(operation=='update'){
    const name = process.argv[3];
    const content = process.argv[4];
    // console.log(operation,name,content);
    const fullName ="files/"+name+".txt"
    fs.appendFileSync(fullName,content);
}

// fs.writeFileSync("files/banana.txt","This is a fruit");

//to remoove file 
// fs.unlinkSync("files/banana.txt")

//reading file
// const data = fs.readFileSync('files/apple.txt',"utf-8");
// console.log(data);

// fs.appendFileSync("files/apple.txt"," and this is a good for health");

