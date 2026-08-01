//Part A

//1

var car = {
    brand: "BMW",
    model: "M3",
    year: "2026",
    color:"grey"
};

console.log(car.brand);
console.log(car["year"]);

car.color ="black";
car.price = 800000;
console.log(car);

delete car.year;
console.log(car.year);

var student = {
    "student-name" : "Sara",
    age : 20
};
console.log(student["student-name"]);


var book = {
    title : "JavaSrcipt Basics",
    author: {
        firstName: "Salma",
        lastName: "Fathy"
    }
};

console.log(book.author.lastName);

var person ={
    name: "Ali",
    age: 25,
    city: "Cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.hasOwnProperty("city"));


//8
var settings ={
    theme: "dark",
    lang: "en",
}
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings);