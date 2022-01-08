"use strict"
let timerId = setTimeout(function clock() {
    let today = new Date(); //현재 날짜 
    let now = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    console.log(now);
    timerId = setTimeout(clock, 1000);
  }, 2000);
