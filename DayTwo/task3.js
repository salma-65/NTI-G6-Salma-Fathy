var name = prompt("plz enter your name");
var birthYear = Number(prompt("plz enter your birth year"));
var student = confirm("Are you a student?")

var age = new Date().getFullYear() - birthYear;
var category;
var qoute

if(age > 60){
 category = "Senior";
} else if(age >= 13 && age<= 17){
    category = "Teen";
    
} else if(age>= 18 && age <= 59){
    category = " Adult";
}
else if(age < 13){
    category = "Kid";
}


if(student){
    console.log("Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category+ "\n\n"+"Don't forget to study hard");
    window.alert("Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category+ "\n\n"+ "Don't forget to study hard");
    document.getElementById("text").innerText ="Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category+ "\n\n" + "Don't forget to study hard" ;
}
else{
    console.log("Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category);
    window.alert("Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category);
    document.getElementById("text").innerText ="Hello "+name +", your are "+age+"years old"+ "\n\n" +"Category: "+ category;
}


