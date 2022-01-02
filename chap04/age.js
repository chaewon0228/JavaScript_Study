'use strict'

/*let age = prompt("나이 입력");

function checkAge(age){  //매개변수는 지역변수
    if(age >= 18) return true;
    else confirm("재인증 받으세요"); 
}

if(checkAge(age)) alert("허용");
else alert("차단");*/


function getMin(a, b){
    return a<b ? a : b;
}
let a = +prompt("number 1");
let b = +prompt("number 2");
alert(getMin(a,b));

function getPow(a,b){
    let pow = 1;
    for(let i=0; i<b; i++){
        pow *= a;
    }
    return pow;
}
alert("a의 b제곱 : "+getPow(a,b));


