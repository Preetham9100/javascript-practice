let age=25
console.log(typeof age);
console.log(typeof (age));  //Method ka type hai((inside bracket))




let age1="25"
console.log(typeof age1); //string

let valueInNumber=Number(age1)
console.log(typeof valueInNumber); //o/p number
console.log(valueInNumber);





let age2="25abc"
console.log(typeof age1); //string

let valueInNumber1=Number(age2)
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //o/p: NaN
//typeof will become number but there are letters so o/p is NaN(Not a Number)

//"33"=>33
//"33abc"=NaN
//true=>1 false=>0


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //o/p true

//1=>true; 0=>false
//""=>false
//"pree"=>true


let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber,stringNumber); //o/p=>string 33



//*************************** Operations ************* 

let value=7
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);


let str1="Hello"
let str2="Preetham"

let str3=str1+" "+str2
console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");


// console.log(+true); //o/p:1
// console.log(+""); //o/p:0

