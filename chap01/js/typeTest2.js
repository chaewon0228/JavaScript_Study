'use strict';
console.log(typeof undefined); //undefined
console.log(typeof 0); //Number
console.log(typeof 10n); //Bigint
console.log(typeof true); //boolean
console.log(typeof "foo"); //String
console.log(typeof Symbol("id")); //Symbol
console.log(typeof Math); //object
console.log(typeof null); //object
console.log(typeof alert); //function
console.log(typeof prompt); //function

let testName = "mirim";
console.log(`hello ${1}`);
console.log(`hello ${"testName"}`);
console.log(`hello ${testName}`);