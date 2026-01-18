let object = {
  id: 0,
  username: 'easazade',
  age: 32,
  gender: 'male',
  active: true,
  room: {
    number: 23,
    participants: ['john', 'ann'],
  },
  sayHi() {
    // ignored
    alert('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

object.newProperty = 'value';
object['animal'] = 'cat';
console.log(`Animal is ${object.animal}`);

// json encoding/serialization
let json = JSON.stringify(object);
console.log(object);
console.log(json);

// To specify which properties of the object, should be included in the JSON.
// Even key of nested properties should be specified.
console.log(JSON.stringify(object, ['id', 'room'], 2));
console.log(
  '---------------------------- function replacer --------------------------------------',
);
// Also possible to pass a function callback as the replacer instead of a string
console.log(
  JSON.stringify(object, function (key, value) {
    // NOTE: !!! this keyword in this function callback refers to the object/nested object
    // that this property (key,value) are a direct child of
    if (key === 'age' || key === 'gender' || key === 'active') {
      console.log(`Omitting the property ${key} from json`);
      return undefined;
    } else {
      return value;
    }
  }),
);
console.log(
  '---------------------------- custom json encoding --------------------------------------',
);
// we can add a custom json encoding by adding a toJSON() method override to the object.
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup = {
  title: 'Conference',
  room, // writing room instead of room: room is called object property shorthand.
};

console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup));
