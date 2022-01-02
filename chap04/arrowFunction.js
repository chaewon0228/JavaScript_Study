'use strict'

function ask(question, yes, no){ //시맨틱
    if(confirm(question)) yes(); //showOk 호출
    else no(); //showNo 호출
}
ask(
    "동의하세요?",
    () => alert("동의했음"),
    () => alert("동의안 했음")
);