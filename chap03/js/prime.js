'use strict';
let number = prompt("숫자 입력 : ");

outer: for (let i=2; i<=number; i++) { 
    for (let j=2; j<i; j++) { 
        if (i%j == 0) continue outer; 
    }
    alert(i); 
}
