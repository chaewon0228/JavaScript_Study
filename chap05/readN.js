"use strict"

function readNumber(){
    while(true){
        let num = prompt("숫자 입력 : ");
        if(num == null || num == "") return null;
        else if(isNaN(num) == false) return +num;
    }
}
alert(readNumber());