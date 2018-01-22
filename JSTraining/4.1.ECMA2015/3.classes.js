"use strict";

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

}

class Student extends Person {

  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getFullName(){
    let fullName = super.getFullName();
    return "Student full name "+fullName;
  }

  getStudentInfo() {
    return this.studentId + " " + this.lastName + ", " + this.firstName;
  }

}

var student = new Student(1, "Bob", "Smith");
console.log(student.getFullName());
console.log(student.getStudentInfo());