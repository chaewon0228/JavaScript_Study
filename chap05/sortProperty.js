"use strict"

let codes = {
    "+49": "독일",
    "+41" : "스위스",
    "+34" : "한국",
    "+1" : "푸에르토리코"
};

for(let key in codes){
    console.log(+key);
}