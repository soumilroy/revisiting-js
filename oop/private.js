export class Student {
  // private fields must be declared at the top of the class else it will throw a syntax error
  #name;
  #age;
  #gender;

  grade = 0;

  constructor(name, age, gender, grade) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    this.grade = grade;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  #pvtMethod() {
    // can be only accessed within the class
    console.log("This is a private method");
  }

  showPvtMethod() {
    this.#pvtMethod();
  }
}

// static initialization block

export class MyClass {
  static {
    console.log(
      "This is a static initialization block. Only runs once when the class is loaded."
    );
  }
}

class DBConnection {
  static #connection = null;

  static {
    DBConnection.#connection = "Connected to the database";
  }
}
