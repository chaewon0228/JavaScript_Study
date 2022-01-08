"use strict";

function getSecondsToday() {
    let now = new Date();
    //오늘 0시 0분으로 객체 생성
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let late = now-today;
    return Math.round(late / 1000); //정수화
}

console.log(getSecondsToday());