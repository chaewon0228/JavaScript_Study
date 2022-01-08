"use strict"
let x = 'xxx'; //전역변수

function test(){
    let y = 'yyy'; 
    
    function bar(){
        let z = 'zzz';
        alert(x + y + z);
    } 
    bar();
}
test();
//실행 시 두 개의 실행 컨텍스트 생성