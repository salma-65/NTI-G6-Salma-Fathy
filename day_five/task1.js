//Task 1

function multiply(a, b) {
    return a * b;
}

function displayResult(result) {
    console.log(result);
}

function calculate(a, b, operation, callback) {
    var result = operation(a, b);
    callback(result);
}

calculate(5, 4, multiply, displayResult);




//task 2
function greetUser () { 
    setTimeout(function(){
    console.log("Hello, User! ");  
},3000)
}
greetUser();

//2
function countdown(){
    var count =10;
    var intervalId = setInterval(function(){
        console.log(count);
        count--;
        if(count == 0){
            console.log("Time's up");
            clearInterval(intervalId);
            
        }
    },1000);

}

//3
setTimeout(function(){
    clearInterval(intervalId);
    console.log("Interval Stopped");
    
},5000)

countdown();


//4
var timeoutId = setTimeout(function(){
    console.log("This will be cleared");
    
},5000);
clearTimeout(timeoutId);



