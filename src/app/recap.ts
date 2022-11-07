const username: string = 'abisai';

class Person {
  age: number;
  lastname: string;

  constructor(age: number, lastname: string) {
    this.age = age;
    this.lastname = lastname;
  }
}


// Lo anterior también puede ser escrito de la forma
class Person2 {
  constructor(public age: number, public lastname: string) {}
}
