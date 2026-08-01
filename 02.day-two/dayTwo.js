//Task 2 day 2

var username = prompt("Enter the username");
if(username == ""){
    window.alert("Username is required");
    
}

var password = prompt("Enter the password");
if(password.length < 8){
    window.alert("Password must be at least 8");
    
}

if(username!= "" && password.length >= 8){
    console.log("Username: " + username + " Password: " + password);
}



