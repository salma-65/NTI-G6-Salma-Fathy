
//Part D

//21
var hello = "HELLO";
for(var i =0; i< hello.length; i++){
  console.log(hello[i]+"\n\n");
  
}

//22
var sumArr = [10, 20, 30, 40];
var sum=0;
for(var x of sumArr){
 sum+= x;
}
console.log(sum);



//23
var str = "JavaScript is amazing and awesome"
var count = 0;
for(var i =0; i< str.length; i++){
  if(str[i] === "a" || str[i] === "A"){
    count++;
  }
}
console.log(count);

//24
var gradesArr = [70, 85, 92, 60, 77, 88];
for(var x of gradesArr){
  if(x%2 == 0){
    console.log(x);
  }
}


//25
var pattern = ""
for(var i =0;i<4;i++){

  for(var j=0; j<=i;j++){
    pattern+= "* ";
  }
  pattern+= "\n";
}

console.log(pattern);


// //26

var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var count2 = 0;
for(var i = 0; i < students.length; i++){
     var upperName = students[i].toUpperCase();

    if (upperName[0] == "S" || upperName[0] == "A" ) {
        console.log(upperName);
        count++;
    }
}

console.log(count);





















