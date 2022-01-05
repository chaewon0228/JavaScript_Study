"use strict"

let str = "john";
function upper(str){
    str = str[0].toUpperCase()+str.slice(1);
    return str;
}
console.log(upper(str));