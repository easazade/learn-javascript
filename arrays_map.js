const numbers = [1,5,9];
let items = numbers.map(number => "<li>"+number+"</li>");
let html = "<ul>"+items.join('')+"</ul>";
console.log(html);