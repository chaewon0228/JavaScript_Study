"use strict"

let employee = [
    {id:1, name:"홍길동"}, 
    {id:2, name:"나미림"},
    {id:3, name:"엄복동"},
    {id:3, name:"신림동"}
];
//id값으로 name 검색
let fn = function(item, index, employee){
    return item.id == 3;
};
console.log(employee.find(fn));

let result = employee.find((item, index, employee)=>{
    return item.id == 3;
});
console.log(result);

let na = employee.find((item, index, employee)=>{
    return item.name == "신림동";
});
console.log(na);