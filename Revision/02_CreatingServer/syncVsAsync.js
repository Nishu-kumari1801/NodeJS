// console.log("n1");

// let a=20;
// let b=0;

// setTimeout(()=>{
//     // console.log("n2");
//     b=100;
// },2000);

// console.log("n3");

// console.log(a+b);

const fs=require('fs');
// fs.readFile("text/my name is nishu  jha.txt","utf-8",(error,data)=>{
//     if(error){
//         return false;
//     }
//     console.log(data);
// })

const data=fs.readFileSync("text/my name is nishu  jha.txt","utf-8",);
console.log(data);
console.log("end script");