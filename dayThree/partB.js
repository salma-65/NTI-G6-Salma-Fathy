// Part B


//8
var strToNum = "45.8";
strToNum = Number(strToNum);
console.log(Math.floor(strToNum));

//9
var decimal = 7.6;
console.log(Math.round(decimal));
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));


//10
console.log(Math.max(12,5,28,9));
console.log(Math.min(12,5,28,9));


//11
var randomInt = Math.floor(Math.random()*20)+1;
console.log(randomInt);


//12
var price = 19.4567;
console.log(price.toFixed(2));

//13
var randomArr = [];
var sum = 0;
for(var i =0; i<5; i++){
    randomArr.push(Math.floor(Math.random()*50)); 
}
for(var i =0; i<5; i++){
  sum+= randomArr[i];
}
var avg = sum/2;
console.log(Math.max(...randomArr));
console.log(Math.min(...randomArr));
console.log(avg);