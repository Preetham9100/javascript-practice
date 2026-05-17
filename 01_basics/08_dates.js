//dates
//date is an object


let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());  //we can add multiple formats 
// console.log(typeof myDate);

// Sun May 17 2026 16:13:56 GMT+0000 (Coordinated Universal Time)
// Sun May 17 2026
// 2026-05-17T16:13:56.868Z
// 2026-05-17T16:13:56.868Z
// 5/17/2026
// 5/17/2026, 4:13:56 PM
// object



let myCreatedDate = new Date(2002,3,11)
console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date("04-11-2002")
console.log(myCreatedDate1.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
