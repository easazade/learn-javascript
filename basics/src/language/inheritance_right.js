class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(){
        console.log(`I am a ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed
    }

    speak() {
        console.log(`I am a ${this.breed} dog. My name is ${this.name}`);
    }
}


let bucky = new Dog("Bucky", "german shepherd");
bucky.speak()