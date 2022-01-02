'use strict'

let a = function(){ //변수에 함수 대응
    alert("Hello");
}
a();
alert(a);

let b = a;
let c = a;
b();
c();