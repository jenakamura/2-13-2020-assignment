//*SET*
const myArray = [1, 2, 3, 3, 4, 1];
const mySet = new Set(myArray);
console.log("array", myArray);
//Set removes duplicates from array
console.log("set", mySet);

//*MAP*
const a = 1;
const b = 2;
//Creates a new map object
const myMap = new Map([[a, "apple"], [b, "banana"]]);
console.log("new map", myMap);
//Set adds a key/value pair to map
myMap.set(3, "coconut");
console.log("add to map", myMap);