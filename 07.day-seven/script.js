//day 7 part2
//Part A

//1
const fruits = ["apple", "banana", "cherry"];

for (const i in fruits) {
    console.log(i, fruits[i]); // "0 apple", "1 banana", "2 cherry"
}

for (const f of fruits) {
    console.log(f); // "apple", "banana", "cherry"
}


//2
for (const [i, val] of fruits.entries()) {
    console.log(i, "→", val);
}
// 0 → apple
// 1 → banana
// 2 → cherry


//3
const str = "NTI";

for (const i in str) {
    console.log(i, str[i]); // "0 N", "1 T", "2 I"
}

for (const c of str) {
    console.log(c); // "N", "T", "I"
}
//for...in iterates over index and for...of iterates over the actual characters.


//4
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
// name Ali
// age 25


//5
for (const n of [1, 2, 3, 4, 5, 6]) {
    if (n === 3){ break;}
    console.log(n);
}
// 1
// 2


//Part B

//6
const map = new Map();
map.set("name", "Ahmed");
map.set(100, "ID");
map.set({ id: 1 }, "UserObject");

console.log(typeof map); // "object"
console.log(map.size);   // 3


//7

console.log(map.get("name"));   // "Ahmed"
console.log(map.has("age"));    // false
map.delete(100);
console.log(map.size);          // 2

//8
for (const [key, value] of map) {
    console.log(key, value);
}

for (const key of map.keys()) {
    console.log(key);
}

for (const value of map.values()) {
    console.log(value);
}

//9
// Keys can be any type
// Map has a built-in .size property — objects need Object.keys(obj).length
// Map keeps insertion order reliably and is directly iterable with for...of

//10
map.clear();
console.log(map.size); // 0

//part c

//11
const set = new Set([10, 21, 2, 3, 2, 10]);
console.log(set);      // Set(4) {10, 21, 2, 3}
console.log(set.size); // 4

//12
console.log(set.has(2)); // true
set.delete(3);
console.log(set.has(3)); // false

//13
for (const v of set.values()) {
    console.log(v);
}

for (const entry of set.entries()) {
    console.log(entry);
}

//14
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4, 5]

//15
// Set only stores unique values, arrays allow duplicates
// Set has no index-based access (set[0] doesn't work), arrays do
// Checking existence with .has() is generally faster on a Set than .includes() on a large array

//part D

//16
const name = "Ahmed";
const age = 25;

const objOld = { name: name, age: age };
const objShort = { name, age };

console.log(objOld);
console.log(objShort);
// both print { name: "Ahmed", age: 25 }

//17
const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(2, 3));      // 5
console.log(calculator.multiply(2, 3)); // 6


//18
const key1 = "email";
const key2 = "phone";

const obj = {
    [key1]: "salma@gmail.com",
    [key2]: "0100",
    [`user_99`]: "salma-1"
};

console.log(obj);


//19
function buildPayload(type, value) {
    return {
        type,
        value,
        createdAt: new Date().toISOString(),
        print() {
            console.log(`${type}: ${value}`);
        },
        [type + "_flag"]: true
    };
}

const payload = buildPayload("order", 12345);
console.log(payload);
payload.print(); // "order: 12345"

//20
// 10 11  as, b = a copies the value, so changing b doesn't affect a. 

//21
// AAA as, person2 = person1 doesn't copy the object, it copies the reference (memory address).
//  Both variables point to the same object in the heap, so changing one changes both.


//22
const original = { x: 1, nested: { y: 2 } };
const copy = { ...original };

copy.x = 100;
copy.nested.y = 200;

console.log(original);
// { x: 1, nested: { y: 200 } }


//23
const original2 = { x: 1, nested: { y: 2 } };
const copy2 = Object.assign({}, original2);
copy2.nested.y = 999;

console.log(original2.nested.y); // 999


//24
const deepSrc = {
    n: 1,
    d: new Date(),
    arr: [1, { k: 2 }],
    set: new Set([1, 2, 3])
};

const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;

console.log(deepSrc.arr[1].k); 

//25
//99 as,the outer array is copied, but the nested array [2, 3] is still shared by reference.
const arr4 = structuredClone(arr1);
arr1[1][0] = 5;
console.log(arr4[1][0]); // 99


//26
// shallow copy, it copies the key-value,
//  but the values are still shared by reference.

//27
const m3 = structuredClone(m1);
m3.get("k").v = 7;
console.log(m1.get("k").v); // 42


//28
const productIds = [101, 102, 101, 103, 102, 104];
const uniqueIds = [...new Set(productIds)];

const productMap = new Map();
uniqueIds.forEach(id => productMap.set(id, "available"));

console.log(productMap.size); // 4
console.log(productMap);

//29

const course = {
    title: "JavaScript",
    info() {
        console.log(`${this.title}`);
    }
};

for (const [key, value] of Object.entries(course)) {
    console.log(key, typeof value);
}


//30
let personA = { name: "SSSSSSS", son: { age: 5 } };

let personB = personA; 
personB.name = "Changed";

let personC = structuredClone(personA); 
personC.son.age = 99;

console.log(personA); 
console.log(personB); 
console.log(personC); 