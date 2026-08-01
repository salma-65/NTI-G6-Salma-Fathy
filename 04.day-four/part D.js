//Part D

//25
var students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

students.forEach(function (student) {
  console.log("Name:"+ student.name + "  Grade:"+ student.grade);
});


//26
var passedStudents = students.filter(function (student) {
  return student.grade >= 80;
});

var studentNames = passedStudents.map(function (student) {
  return student.name;
});

console.log(studentNames);

//27
var products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];

var totalPrice = products.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(totalPrice);


//28
var skills = ["js", "html", "css", "js", "react", "js"];

var jsCount = skills.filter(function (skill) {
  return skill === "js";
}).length;

console.log(jsCount);


//29
var classroom = {
  teacher: "Mr. Ahmed",
  students: ["Omar", "Mona", "Ali", "Sara"]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);


//30
var products = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

var upperTitles = products.map(function (product) {
  return product.title.toUpperCase();
});

console.log(upperTitles); 


var cheapProducts = products.filter(function (product) {
  return product.price < 30;
});

console.log(cheapProducts);

var total = products.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);


//Session task
var users = [
  { name: "Ali", city: "CAI" },
  { name: "Sara", city: "GZA" },
  { name: "Mona", city: "CAI" }
];

var byCity = {};

for (var u of users) {

  if (!byCity[u.city]) {
    byCity[u.city] = [];
  }

  byCity[u.city].push(u);

}

console.log(byCity);