"use strict"
let str = "Where there is a will there is a way";
let index = 0;
while(1){
    let find = str.indexOf("er", index);
    if(find == -1) break;
    console.log(find);
    index = find+1;
} 