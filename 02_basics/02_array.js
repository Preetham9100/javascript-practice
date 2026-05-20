const myArr = [1,2,3,4,5]
const otherArray = [6,7,8,9,10]

// myArr.push(otherArray)
// console.log(myArr); //it will add the whole array as a single element


myArr.push(...otherArray) //it will add the elements of other array in myArr
console.log(myArr);

// spread operator is used to spread the elements of an array or object into individual elements. It is denoted by three dots (...). In the above example, we are using the spread operator to add the elements of otherArray into myArr.

// Without the spread operator, if we do myArr.push(otherArray), it will add the entire otherArray as a single element to myArr, resulting in a nested array. However, by using the spread operator, we are able to add each element of otherArray individually to myArr, resulting in a flat array with all the elements combined.

// In summary, the spread operator allows us to easily combine arrays or add elements from one array into another without creating nested structures.

// rest operator is used to collect the remaining elements of an array or object into a new array or object. It is also denoted by three dots (...). The rest operator is typically used in function parameters to gather the remaining arguments into an array.   
// example of rest operator:

function myFunction(a, b, ...rest) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);

// In this example, the rest operator is used in the function parameters to gather all the arguments passed to the function after the first two (a and b) into an array called rest. When we call myFunction(1, 2, 3, 4, 5), the first two arguments are assigned to a and b, while the remaining arguments (3, 4, 5) are collected into the rest array. This allows us to handle a variable number of arguments in a function without having to specify each one individually.