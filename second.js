let students = [];

class Student {
  constructor(
    firstName,
    lastName,
    region,
    birthdate,
    position,
    positionType,
    salary,
    isMarried
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.region = region;
    this.birthdate = birthdate;
    this.position = position;
    this.positionType = positionType;
    this.salary = salary;
    this.isMarried = isMarried;
  }
}

function reloadUsers() {
    
}

function createUser() {
  reloadUsers();
}

function updateUser() {
  reloadUsers();
}

function deleteUser() {
  reloadUsers();
}
