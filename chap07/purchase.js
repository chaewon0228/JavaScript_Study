"use strict"

let n = {name : "notebook", price : 1000};
let p = {name : "pencil", price : 500};
let e = {name : "eraser", price : 1500};

let item = [ n, p, e ];

let purchase = item.map(item => item.price);
console.log(purchase);

let sum=0;
purchase.forEach((item)=>{
    sum += item;
});
console.log(sum);