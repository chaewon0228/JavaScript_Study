"use strict"
let arr_length = ["aaa", "bbbbbb", "cccccc"];

let fn = function(item, index, array){
    return item.length;
};
console.log(arr_length.map(fn));