class Person {
  Person(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
	const person = new Person("John",25);
  study() {
    console.log(`${person._name} is studying.`);
  }
}

class Teacher extends Person {
	const student = new Student("John",30)
  teach() {
    console.log(`${student._name} is teaching.`);
  }
}
