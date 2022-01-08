"use strict"
function sayHi(){
    console.log("안녕하세요.");
}
setTimeout(sayHi, 5000);

function sayHiname(who, phrase){
    console.log(who+" 님, "+phrase);
}
setTimeout(sayHiname, 3000, "홍길동", "안녕하세요.");

let st1 = setTimeout(function sayHello(){
    console.log("안녕하세요!!!!!!");
}, 2000);
st1;
//clearTimeout(st1); 메모리 해제