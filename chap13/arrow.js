"use strict";

let group = {
    title: "1모둠",
    students: ["보라", "효진", "지민"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + " : " + student)
      );
    }
  };
  
  group.showList();
