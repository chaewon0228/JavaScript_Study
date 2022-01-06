"use strict"

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries){
    let max = 0;
    let mName = null;
    for(const [name, salary] of Object.entries(salaries)){
        if(max<salary){
            max = salary;
            mName = name;
        }
    }
    return mName;
}
console.log(topSalary(salaries));
