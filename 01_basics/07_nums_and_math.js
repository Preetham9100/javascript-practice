const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
// console.log(balance.toString);

const anyNum = 123.8999
console.log(anyNum.toPrecision(4));


//******************** maths **********/
console.log(Math);
console.log(Math.PI);

// min  
// max
// ceil (high)
// floor
// random 
// log 
// sqrt 

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10))+1);

const min = 100
const max = 200

console.log(Math.floor(Math.random()*(max-min +1))+min);
