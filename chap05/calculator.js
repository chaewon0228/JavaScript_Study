"use strict"

let calculator = {};

calculator.read = function(){
    this.a = +prompt("숫자 1 입력 : ");
    this.b = +prompt("숫자 2 입력 : ");
}
calculator.sum = function(){
    return this.a + this.b;
};
calculator.mul = function(){
    return this.a * this.b;
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());