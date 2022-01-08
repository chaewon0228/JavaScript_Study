"use strict";
//시계(초)

setInterval(() => {
    let today = new Date();
    let days =["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    let month = today.getMonth();
    let date = today.getDate();
    let day = days[today.getDay()]; //요일
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = minute < 10 ? "0"+minute :minute;
    seconds = seconds < 10 ? "0"+seconds:seconds;
    let now = `${month}월 ${date}일 ${day} ${hour}시 ${minute}분 ${seconds}초`;
    console.log(now);
}, 1000);