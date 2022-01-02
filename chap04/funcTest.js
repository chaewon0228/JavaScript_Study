'use strict'
setValue(10, 20);
function setValue(one, two){
    let total = one + two;
    console.log(total);
}

function showMessage1(from){
    console.log(from);
}
showMessage1("홍길동");

function showMessage2(from, text = "환영합니다."){
    console.log(from + text);
} //브라우저 엔진이 html요소 -> 전역변수 -> 선언함수
//처음 함수를 덮어버림 //오버라이트
showMessage2("홍길동");

function showCount(count){
    console.log(count ?? "unkown");
}
showCount();

function getPoint(){
    return 10*20;
}
let result = getPoint();
console.log(result);