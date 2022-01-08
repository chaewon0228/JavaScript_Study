"use strict";

function getSecondsTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let late = tomorrow-now;
    return Math.round(late / 1000); //정수화
}

console.log(getSecondsTomorrow());