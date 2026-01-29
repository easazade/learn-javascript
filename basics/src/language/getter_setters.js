const user = {
  _firstName: 'John', // “real” internal storage
  _lastName: 'Smith',

  // Read successful full name (computed property)
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },

  // Setting fullName parses and validates
  set fullName(value) {
    const parts = value.split(' ');
    if (parts.length < 2) {
      throw new Error('fullName requires first and last name');
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  },

  // A derived “initials” getter only
  get initials() {
    return this._firstName[0].toUpperCase() + this._lastName[0].toUpperCase();
  },
};

console.log(user.fullName); // "John Smith"
console.log(user.initials); // "JS"

user.fullName = 'Alice Cooper'; // setter runs
console.log(user.fullName); // "Alice Cooper"

// Accessors are used like normal properties,
// not as methods (no parentheses needed).
console.log(user.initials); // "AC"

// Setter validation catches incomplete names
try {
  user.fullName = 'Single';
} catch (err) {
  console.log('Error:', err.message);
}

class Human {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get initials() {
    return this._firstName[0].toUpperCase() + this._lastName[0].toUpperCase();
  }
}

let human = new Human('Alireza', 'Easazade');
console.log(human.firstName);
console.log(human.lastName);
console.log(human.initials);
