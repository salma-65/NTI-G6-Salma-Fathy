//Part 1

//Part A
//1
function withoutStrict(){
    txt="hello";
}
test();
console.log(test()); //hello

//2
function withStrict(){
    "use strict";
    try{
        txt2="hello";
    }
    catch(error){
        console.log(error.message);
        
    }
}
withStrict(); //txt2 is not defined, strict mode prevents using undeclared variables

//3
// function trueStrict(){
//     "use strict";
//     var localVar = "test";
//     try{
//         delete localVar;
//     }
//     catch(error){
//         console.log(error.message); //Delete of an unqualified identifier in strict mode.
        
//     }

//     var student={
//     name:"salma"
//     };

// delete student.name;
// console.log(student);  //empty object

// };
// trueStrict();  //Reason: we cannot delete a var in stricrt mood but deleting an object property is allowed



//4
//undefined ,Reason: hoisting happened as x declared with undefined
//10  ,Reason: x updated to 10

/*5
case 1:
Hi ,Reason: function declaration got hoisted so the they can be called before they are written

Case 2:
prints an error as the variable is hoisted not the function body as the engine sees only a variable that is 
being called as a function
*/

/*6
RefrenceError: cannot acces a before intitialization
as variable declared with let got hoisted but they stay inside the Temporal Dead Zone TDZ
until declaration line is reached
*/

/*7
undefined
2
1
*/

//part c

//8
function testVar() {

    if (true) {

        var x = 10;

    }

    console.log(x);

}
console.log(x); //Refrence error


testVar(); //10 ,as we are printing in the function scope

//9

if (true) {

    let a = 5;
    const b = 10;

    console.log(a); //5
    console.log(b); //10

}
// console.log(a); Refrence error
// console.log(b);

//10
var number = 5;
var number = 10;

console.log(number); //10 (var allows re-declaration)

let age =20;
//let age =25;  error

//11
const student2 = {

    name: "salma",
    age: 20,
    city: "Cairo"

};

console.log(student);

// Change age
student.age = 21;

console.log(student);

// Add new property
student.grade = "A";

console.log(student);

// Delete city
delete student.city;

console.log(student);


//Reassign the object
try {

    student = {

        name: "Fatma"

    };
}
catch (error) {
    console.log(error.message);
}

//12

const nums = [1, 2, 3];
nums.push(4); 

console.log(nums);// [1,2,3,4]

nums[0] = 100;

console.log(nums); 
// [100,2,3,4]

nums = [5, 6]; // Assignment to constant variable.


//13
var a;
let b;
// const c; // Error: Missing initializer in const declaration

//14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1); //var global
console.log(window.g2); //undefined
console.log(window.g3); //undefined

//15
const handlers = {};

for (let i = 0; i < 3; i++) {

    handlers["fn" + i] = function () {
        return "index: " + i;
    };

}

console.log(handlers.fn0()); //0
console.log(handlers.fn2()); //2 
// using (var) as function scope so every function calling we store the i with the final value which is 3
//using (let) as block scope every function call will store a different i

//Part D

//16
const welcome = (name) => "Welcome, " + name +  "!";
console.log(welcome("salma"));

//17
const fullinfo =(first,last,age) => 
    `${first} ${last} is ${age} years old`;
console.log(fullinfo("Salma","Fathy",20));

//18
const multiply = (a,b) => a*b;

const sum =(a,b) => {
    console.log(a,b);
    return a+b;
    
}


//Part E
const product = {

    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"

};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);


//20
const [first, second] = ["HTML", "CSS", "JS", "React"];

console.log(first);
console.log(second);

//21
function greet(name = "Guest", message = "Hello") {

    return `${message}, ${name}!`;

}

console.log(greet("Salma", "Hi"));
console.log(greet("Salma"));
console.log(greet());

//22
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

//23
const merged = [...[1, 2], ...[3, 4, 5]];
console.log(merged);

const arr = [10, 20, 30];
const copy = [...arr];

copy.push(40);

console.log(arr);
console.log(copy);

//24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };

const merge = { ...user, ...contact };

console.log(merged); //age from contacts wins
//the properties are merged from left to right so, age from contact overwrites the age from user

//25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {

    return a + b + c + d;
}

console.log(total(...values));



//part F

//26
//Output: Omar
//person 1 and person 2 objects are referring to the same place in heap

//27
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const shallowCopy = {
    ...original
};

shallowCopy.name = "Sara";

shallowCopy.details.city = "Alex";

console.log(original);
console.log(shallowCopy);
//The city is the only thing that changed in original as both objects share the same refrence 
//for the nested object


//28

const deepCopy = structuredClone(original);

deepCopy.details.city = "Alex";

console.log(original); //Mona, Cairo
console.log(deepCopy); 

//29
const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};

localStorage.setItem("userdata", JSON.stringify(userData));

const data = JSON.parse(localStorage.getItem("userdata"));
console.log(typeof data);
console.log(data);

localStorage.removeItem("userdata");

//30
const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: []
};

APP_CONFIG.api.timeout = 3000;

APP_CONFIG.features.push("Dark Mode");

console.log(APP_CONFIG);

try {
    APP_CONFIG = {};
} catch (error) {
    console.log(error.message);
}


//31

function createCard(title, price = 0, ...tags) {
    return {
        title,
        price,
        tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "Dell", "16GB", "SSD");
const card2 = createCard("Mouse");

console.log(card1);
console.log(card2);


//32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}

