var myObj = {name: "John", age: 31, city: "New York"};
console.log(myObj.name);
console.log(myObj.city);

var myJSON = JSON.stringify(myObj);
console.log(myJSON);

var myObj2 = JSON.parse(myJSON);
console.log(myObj2.age);