"use strict"

let recipMap = new Map([
    ["cucumber", 500],
    ["tomatos", 350], 
    ["onion", 50]
]);
for(let vegetable of recipMap.keys()){
    console.log(vegetable);
}
for(let price of recipMap.values()){
    console.log(price);
}
for(let entry of recipMap){
    console.log(entry)
}
recipMap.forEach(value, key, map=>{
    console.log(`${key}: ${value}`);
});