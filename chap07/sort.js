"use strict"

let arr = [2,4,56,1,11,34];

function compareNA(a,b){ //숫자 오름차순 정렬
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
function compareND(a,b){ //숫자 내림차순 정렬
    if(b>a) return 1;
    if(a==b) return 0;
    if(b<a) return -1;
}
arr.sort(compareNA);
console.log(arr);
arr.sort(compareND);
console.log(arr);