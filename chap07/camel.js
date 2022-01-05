"use strict";

let str = "my-short-string";

function camel(str){
    let arr = str.split("-");
    arr = arr.map((arr, index)=>index == 0 ? arr : arr[0].toUpperCase() + arr.slice(1));
    let result = arr.join('');
    return result;
}
console.log(camel(str));