const circle = {
    radius: 5,
    draw() {
        console.log("drawing circle");
    }
}

let another1 = {};

for (let key in circle)
    another1[key] = circle[key];

//our initial object does not have to be empty    
let another2 = Object.assign({}, circle);

//this spread operator will does exactly what first method does
let another3 = { ...circle };

console.log(another1);
console.log(another2);
console.log(another3);