function Human(name) {
  this.name = name;
}

Human.prototype.printName = function () {
  console.log(this.name);
};

let dude = new Human('dude');
let shapoor = new Human('shapoor');
dude.printName();
shapoor.printName();
