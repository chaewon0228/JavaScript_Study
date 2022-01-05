"use strict"

let list = ["A", "B", "C"];

let fn = function(item, index, list){
    console.log(item+":"+index+":"+list);
}
list.forEach(fn);

//화살표 함수 활용
list.forEach((item, index, list)=>{
    console.log(item+":"+index+":"+list);
});