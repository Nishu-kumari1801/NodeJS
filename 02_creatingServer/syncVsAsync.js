// console.log('apple1');

// setTimeout(()=>{
//     console.log("apple2");
// },2000)

// console.log('apple3');

// let a=20;
// let b=0;

// setTimeout(()=>{
//     b=100;
// },2000);

// console.log(a+b);

const fs= require('fs');
fs.readFile('text/peter.txt',"utf-8",(error,data)=>{
    if(error) return false;
    console.log(data);
})
console.log("end script");