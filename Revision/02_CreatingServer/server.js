// ==================== lecture:-01(Create Server in Node js) ====================

// const http =require('http');
// http.createServer((req,res)=>{
//     // res.write("This is anil sidhu");
//     res.write('<h1>Hello this is nishu jha</h1>')
//     res.end("Hello");
// }).listen(4800);

// ==================== lecture:-02 (External package and package.json) ====================

// const http =require('http');
// http.createServer((req,res)=>{
//     res.write('<h1>Hello this is nishu jha</h1>')
//     res.end("Hello");
// }).listen(4800);

// ==================== lecture:-03 (What is nodemon package ) ====================

// const http =require('http');
// http.createServer((req,res)=>{
//     res.write('<h1>Hello this is nishu jha</h1>')
//     res.end("Hello");
// }).listen(4800);

// // const http =require('http');
// http.createServer((req,res)=>{
//     res.write('<h1>Other server</h1>')
//     res.end("Hello");
// }).listen(5200);

// ==================== lecture:-04 (Understand Server response) ====================

// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("<h2>Hii i m nishu jha from glbitm</h2>");
//     res.end("hello code step by step");
// }).listen(4800);

// ==================== lecture:-05 (Make Simple API in Node js) ====================
// ==================== lecture:-06 (Understand Request params in Node) ====================
// ==================== lecture:-07 (Get Input from terminal and  command line prompt) ====================
// ==================== lecture:-08 (Load HTML file in node and show Output in browser) ====================
// ==================== lecture:-09 (How to Submit form in node js ) ====================
// ==================== lecture:-10 (Create file from form requested Data) ====================
// ==================== lecture:-11 ( Synchronous vs Asynchronous Programming in node ) ====================
// ==================== lecture:-12 (How node js works) ====================

const http=require("http");
http.createServer((req,res)=>{
    res.write("<h2>Hii i m nishu jha from glbitm</h2>");
    res.end("hello code step by step");
}).listen(4800);