var name = prompt("plz enter your name");
var  age = prompt("plz enter your age");
var yearOfExperience = Number(prompt("plz enter your year of experience"));
var rating = Number(prompt("Enter your self rating"));

if(yearOfExperience < 2){
    console.log("Junior");
} else if(yearOfExperience >=2 && yearOfExperience < 5){
    console.log("Mid-level");
} else if(yearOfExperience >= 5 && yearOfExperience < 10){
    console.log("Senior");
} else if( yearOfExperience >= 10){
    console.log("Expert");
}

switch(true){
case (rating >= 9):
    window.alert("Excellent");
    break;

case (rating == 8 || rating == 7):
    window.alert("Good");
    break;

case (rating == 5 || rating == 6):
    window.alert("Average");
    break;

case (rating < 5):
    window.alert("Needs Improvement");
    break;
}

var baseSalary = 2000;
var bonus =0; 

if(yearOfExperience >=0 && yearOfExperience <= 2){
    bonus = baseSalary * (10/100); 
} else if (yearOfExperience >=3 && yearOfExperience <= 5){
    bonus = baseSalary * (15/100); 
} else if(yearOfExperience > 5){
    bonus = baseSalary * (20/100); 
}
    var finalSalary = baseSalary + bonus;
    console.log("Final salary: " + finalSalary);

//Work shift

var currentHour = new Date().getHours();
if(currentHour >= 6 && currentHour <= 9 ){
    console.log("Day shift");
} else if(currentHour >= 18 && currentHour <= 21 ){
    console.log("Night shift");
}