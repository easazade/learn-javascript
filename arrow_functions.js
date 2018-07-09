const numbers = [1,54,8,94,6,4];
let objects = numbers
    .filter(n => n > 5)
    .map(i => {
        //we can turn this into a single line
        //but it should be in () like 
        // .map(i => ({value:i}));
        //the below is wrong
        // .map(i => {value:i});  
        let object = {value:i};
        return object;
    })
    .find(m => m.value == 54);
console.log(objects);
