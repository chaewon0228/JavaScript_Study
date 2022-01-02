'use strict'

let age = prompt("나이 입력");

if(age < 18){ //특정한 코드블럭 안에 정의 되어있는 함수는 코드블럭 밖에서 호출 불가능
    function welcome(){
        alert("청소년입니다. 환영합니다.");
    }
}
else{
    function welcome(){
        alert("성인입니다. 환영합니다.");
    }
}
welcome();