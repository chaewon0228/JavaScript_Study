"use strict";


function getWeekDayy(date){
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
}
let someday = new Date(2021, 1, 1);
console.log(getWeekDayy(someday));