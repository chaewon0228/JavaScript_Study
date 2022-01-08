"use strict"

let message = "안녕하세요."; 
{
    console.log(message); 
}
//console.log(message);
{   
     message = "어서오세요."; 
    console.log(message);
}
{
    message = "안녕히 가세요."; 
    console.log(message);
}

/*{   // 블럭 안에 있어서.// 유효범위는 블럭 안
    //let 지우면 오류 //let 으로 선언한 변수는 대부분 지역 변수다.
   let message = "어서오세요."; //let 으로 선언한 변수는 지역 변수다.
   console.log(message);
}*/