"use strict"
let timerId = setInterval(() => console.log('째깍'), 1000);

setTimeout(()=>{
    clearInterval(timerId); 
    console.log('정지'); }, 5000);