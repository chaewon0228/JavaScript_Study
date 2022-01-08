"use strict";
let me = {
    firstname: "홍",
    lastname: "길동",
    introduce() {
      console.log(`My name is ${this.firstname}${this.lastname}입니다.`);
    }
  };
  me.introduce();
  //setTimeout(me.introduce(), 1000);
  //동작안함 //딜레이가 발생
  setTimeout(function(){
      me.introduce();
  }, 1000);

  setTimeout(()=>me.introduce(), 1000);

  me={  //컨텍스트가 날라간것 Hi (바인드사용)
      introduce(){
          console.log("Hi");
      }
  }
  
