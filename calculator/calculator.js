"use strict";

let num1 = ""; // input first number
let num2 = ""; // input second number
let operator = "";

let op_value = document.querySelector("#operator"); // input operator
let result_value = document.querySelector("#result");

let onClickNumber = (number) => {
    return (event) =>{
        if(operator){
            if(!num2){
                result_value.value = "";
            }
            num2 += number;
        } 
        else num1 += number;
        result_value.value += number;
    }
}
let onClickOper = (op) => {
    return () =>{
        if(num1){
            operator = op;
            op_value.value = op;
        }
        else alert("숫자를 먼저 입력하세요!");
    }
}
document.querySelector("#num-0").addEventListener("click", onClickNumber(0));
document.querySelector("#num-1").addEventListener("click", onClickNumber(1));
document.querySelector("#num-2").addEventListener("click", onClickNumber(2));
document.querySelector("#num-3").addEventListener("click", onClickNumber(3));
document.querySelector("#num-4").addEventListener("click", onClickNumber(4));
document.querySelector("#num-5").addEventListener("click", onClickNumber(5));
document.querySelector("#num-6").addEventListener("click", onClickNumber(6));
document.querySelector("#num-7").addEventListener("click", onClickNumber(7));
document.querySelector("#num-8").addEventListener("click", onClickNumber(8));
document.querySelector("#num-9").addEventListener("click", onClickNumber(9));

document.querySelector("#plus").addEventListener("click", onClickOper("+"));
document.querySelector("#minus").addEventListener("click",  onClickOper("-"));
document.querySelector("#div").addEventListener("click", onClickOper("/"));   
document.querySelector("#mult").addEventListener("click", onClickOper("x"));
document.querySelector("#same").addEventListener("click", ()=>{
    if(num2){
        switch(operator){
            case "+": result_value.value = parseInt(num1) + parseInt(num2); break;
            case "-": result_value.value = parseInt(num1) - parseInt(num2); break;
            case "/": result_value.value = parseInt(num1) / parseInt(num2); break;
            case "x": result_value.value = parseInt(num1) * parseInt(num2); break;
            default : break;
        }
    }
});
document.querySelector("#c").addEventListener("click", ()=>{
    num1 = ""; num2 = "";
    operator = "";
    op_value.value = "";
    result_value.value = "";
});

