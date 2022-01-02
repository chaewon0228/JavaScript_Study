'use strict'

function ask(question, yes, no){ //시맨틱
    if(confirm(question)) yes(); //showOk 호출
    else no(); //showNo 호출
}
function showOk(){
    alert("동의하셨습니다.");
}
function showNo(){
    alert("동의하지 않았습니다.");
}
ask("동의하십니까?", showOk, showNo);