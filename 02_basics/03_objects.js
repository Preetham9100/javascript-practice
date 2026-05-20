//singleton object
const myObj = {
    name: "John",
    age: 30,
    city: "New York"
}

// console.log(myObj);

// we can access the properties of an object using dot notation or bracket notation. For example, myObj.name will return "John", and myObj["age"] will return 30.

// we can also add new properties to an object or modify existing properties. For example, myObj.country = "USA" will add a new property called country with the value "USA" to the myObj object. Similarly, myObj.age = 31 will modify the existing age property to have the value 31.             
myObj.country = "USA"       
myObj.age = 31
// console.log(myObj);

// we can also delete properties from an object using the delete operator. For example, delete myObj.city will remove the city property from the myObj object. After this operation, myObj will no longer have the city property.             
delete myObj.city
// console.log(myObj);

// we can also check if a property exists in an object using the in operator. For example, "name" in myObj will return true because the name property exists in the myObj object, while "city" in myObj will return false because the city property has been deleted from the myObj object.             
console.log("name" in myObj); // true
console.log("city" in myObj); // false      

