"use strict";

let user = {
    firstname: "길동",
    lastname: "홍"
};
function func1(){
    console.log(this.lastname+this.firstname);
}
function func2(p){
    console.log(p + ", "+this.lastname+this.firstname);
}
let funUser1 = func1.bind(user);
funUser1();

let funUser2 = func2.bind(user);
funUser2("Hello");