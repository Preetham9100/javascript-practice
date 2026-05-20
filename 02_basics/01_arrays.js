//array

const myArr = [0,1,2,3,4,5,6,7]
// console.log(myArr);
// console.log(myArr[3]);

//another way of declaring array

const myArr1 = new Array("!",1)
// console.log(myArr1);


//Array methods

myArr.push(8)
myArr.push(9)
myArr.push(10)
myArr.pop()
// console.log(myArr);


myArr.unshift(9) //it will add in the starting of array
// console.log(myArr[0]);
console.log(myArr);

myArr.shift() //we dont add any parameter
//it will delete starting element
// console.log(myArr);

//includes --> true/false
//indexOf--> gives index value
    // console.log(myArr.indexOf(19)); //-1 cuz 19 is not  present in array
    // console.log(myArr.includes(19)); //false
// console.log(myArr.includes(9)); //true

const newArr = myArr.slice(2,5) //it will give us a new array from index 2 to 4
console.log(newArr);

myArr.splice(2,3) //it will delete 3 elements from index 2
console.log(myArr);

myArr.splice(2,0,2,3,4) //it will add 2,3,4 from index 2
console.log(myArr);

myArr.reverse() //it will reverse the array
// console.log(myArr);

myArr.sort() //it will sort the array in ascending order
// console.log(myArr);     

myArr.sort((a,b)=>b-a) //it will sort the array in descending order
// console.log(myArr);

myArr.sort((a,b)=>a-b) //it will sort the array in ascending order
// console.log(myArr);

const myArr2 = [1,2,3,4,5]
const newArr2 = myArr.concat(myArr2) //it will concatenate two arrays
console.log(newArr2);

// join() //it will join the array elements into a string
// console.log(myArr.join("-")); //it will join the array elements with a hyphen

// difference between slice and splice

// slice() --> it will give us a new array from the specified index to the end of the array
// splice() --> it will delete or add elements from the specified index and return the deleted elements as an array


// difference     between unshift and shift


// unshift()     --> it will add an element at the beginning of the array and return the new length of the array
// shift() --> it will remove the first element of the array and return that removed element