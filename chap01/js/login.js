'use strict';
let id = prompt("아이디 : ");
let pw;

alert(id == "admin" ? (pw = prompt("패스워드 : ") == "1234" ? "환영" : "인증 실패!") : "아이디 오류!");