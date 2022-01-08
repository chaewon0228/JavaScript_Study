"use strict"

function fromto(from, to){
    setTimeout(function print() {
        if (from <= to) {
            console.log(from);
            setTimeout(print, 1000);
        }
        from++;
      }, 1000);
}
fromto(1, 5);