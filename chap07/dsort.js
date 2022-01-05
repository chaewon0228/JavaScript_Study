"use strict"

let arr = [5,2,4,-9,34];

function compareN(a,b){
    if(b>a) return 1;
    if(a==b) return 0;
    if(b<a) return -1;
}
arr.sort(compareN);
console.log(arr);