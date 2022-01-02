'use strict'
/*
let age = prompt("나이 입력");
let welcome;

if(age < 18){ 
    welcome = function(){
        alert("청소년입니다. 환영합니다.");
    }
}
else{
    welcome = function(){
        alert("성인입니다. 환영합니다.");
    }
}
welcome();*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하세요?",
    () => alert("동의했습니다."),
    () => alert("취소했습니다.")
  );