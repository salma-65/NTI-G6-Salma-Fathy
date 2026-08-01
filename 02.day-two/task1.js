
var username = "salma";
var password = "12345678";
if(username == ""){
    window.alert("Username is required");
    
}

if(password.length < 8){
    window.alert("Password must be at least 8");
    
}

if(username!= "" && password.length >= 8){
    console.log("Username: " + username + " Password: " + password);
}


