
//part C

//17
var fruit = ["apple", "banana", "cherry"];

var upperFruits = fruits.map(function(fruit){

    return fruit.toUpperCase();
});

console.log(upperFruits);
console.log(fruits);


//18
var nums = [10, 55, 30, 80, 45, 90];

var filteredNums = nums.filter(function (num) {
  return num > 50;
});

console.log(filteredNums); 
console.log(nums); 


//19
var cities = ["Cairo", "Giza", "Alex", "Aswan"];

var firstCity = cities.find(function (city) {
  return city.startsWith("A");
});

var firstCityIndex = cities.findIndex(function (city) {
  return city.startsWith("A");
});

console.log(firstCity);     
console.log(firstCityIndex);

//20
var letters = ["a", "b", "c", "d", "e"];

var copiedLetters = letters.slice(1, 4);

console.log(copiedLetters); 
console.log(letters); 

//21
var words = ["one", "two", "three", "four", "five"];
var removedItems = words.splice(1, 2);

console.log(removedItems); 
console.log(words);  

//22
var numbers = [40, 100, 1, 5, 25];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); 

//23
var ages = [16, 21, 17, 19];

var has18 = ages.some(function (age) {
  return age >= 18;
});

var all18 = ages.every(function (age) {
  return age >= 18;
});
console.log(has18);
console.log(all18);

//24
var values = [5, 10, 15, 20];

var total = values.reduce(function (acc, value) {
  return acc + value;
}, 0);

console.log(total); 