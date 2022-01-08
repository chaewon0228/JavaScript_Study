"use strict"
//중요함
alert("Hello");
window.alert("Hi"); //window 객체의 메서드

var gVar = 5;
alert(window.gVar); //window 객체
//*사용X?: 윈도우 객체 내부적으로 프로퍼티 생성 -> 이름과 동일하면 충돌

window.currentUser = { //중요한 변수에서 모든 함수가 접근 가능한 변수를 선언하고 싶은 경우
    name: "John"
};
let currentUser = "Peter"; //변수 충돌시 엔진은 가까운 변수부터 가져온다.
alert(currentUser);
alert(window.currentUser.name); //John

// Hello, Hi, 5, Peter