//import { username } from "./data";

// const data = require('./data');
// console.log(data.username);

const {username} = require('./data');
console.log(username);

var a=10;
let b=20;
const c=30;

b=100;
a=200;
//c=300;
console.log(a+b+c);
if(a!=200){
    console.log("this is if condition");
}else{
    console.log("this is else condition");
}

function fruit(item){
    console.log("fruit is : "+item);
}
fruit("banana");
fruit("apple");

// for(var a=0;a<=10;a++){
//     console.log(a);
// }

// var a=0;
// while(a<=10){
//     console.log(a);
//     a++;
// }

var users=["anil","sam","peter","bruce"];
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}

var users = {
    name:"anil",
    city:'delhi',
    age:89
}
console.log(users);

