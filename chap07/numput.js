"use strict"

let str = "What I'd like to tell on this topic is:";

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate(str, 20));