// stack Memory (Primitive) we get value(copy)
//Heap Memory (Non-Primitive) we get refernce

let myName = "Preetham"

let anotherName = myName
console.log(anotherName);

anotherName="Singh"

console.log(myName);
console.log(anotherName);



let user1 = {
    email : "pree@.com",
    upi : "9100@ybl"
}
console.log(user1);
let user2=user1

user2.email="singh@com"
console.log(user1);
console.log(user2);
