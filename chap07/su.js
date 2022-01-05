"use strict"

let str = "$120";

function extraCurrencyValue(str){
    return str.slice(1);
}
console.log(extraCurrencyValue(str));