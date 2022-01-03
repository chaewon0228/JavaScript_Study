"use strict";

let stationary = prompt("어떤 화장품 구매?");
let bag = {
    [stationary] : 10
};

alert(bag[stationary]);

let cnt = +(prompt("몇 개 더 구입?"));

bag[stationary] += cnt;
alert(bag[stationary]);