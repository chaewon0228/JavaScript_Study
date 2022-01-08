"use strict";

function calculate(){
    let buy_date = new Date(2021, 1, 1);
    let now = new Date();
    let late = now = buy_date;
    late = Math.floor(late/100*60*60*24);
    if(late > 30) console.log("교환 불가");
    else console.log("교환 가능");
}
calculate();