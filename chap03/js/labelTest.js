'use strict';

outer: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let input = prompt(`(${i},${j})의 값`, '');
        if(!input) break outer; //안 쪽 for문만 //break
    }
}
alert("완료");