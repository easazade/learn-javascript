const numbers = [1, 54, 8, 94, 6, 4];

let objects = numbers
    .filter(n => n > 5)
    .map(i => {
        //we can turn this into a single line
        //but it should be in () like 
        // .map(i => ({value:i}));
        //the below is wrong
        // .map(i => {value:i});  
        let object = { value: i };
        return object;
    })
    .find(m => m.value === 54);

console.log(objects);

/*
one amazing thing about arrow function is that when we use them instead of a anynomous function,
and we use this keyword inside the function we won't get property undefind error
so arrow functions know which context to look at and we don't have to use that = this;
to get a reference to the right context
*/

