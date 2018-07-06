function Human(name) {
    this.name = name;
}

Human.prototype.printName = function () {
    console.log(this.name);
};

let asshole = new Human("trump");
let shapoor = new Human("shapoor");
asshole.printName();
shapoor.printName();