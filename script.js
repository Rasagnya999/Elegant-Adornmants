function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value;
    const password =document.getElementById("password").value;
    
    
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    let nameStatus = mobileStatus = emailStatus = passwordStatus =  false;
    
    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const pswdExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    
    
    
    
    //Name Validation
    if(username === "") {
        nameError.innerHTML = "Please Enter Name";
    } else {
        if (username.match(alphaExp)){
            nameError.innerHTML = "";
            nameStatus = true;
        } else {
            nameError.innerHTML = "Only Characters";
        }
    }
     
    //Mobile validation
    if (mobile === ""){
        mobileError.innerHTML = "Please Enter Mobile Number";
    } else {
        if(mobile.match(numExp)){
            if(mobile.length === 10){
                mobileError.innerHTML = "";
                mobileStatus = true;
            }
           else{
            mobileError.innerHTML = "10 Digits Mobile Number";
           
           }
           
        }
        else {
            mobileError.innerHTML = "Only Digits"
        }
    }
    
    //E-Mail validation
    if(email === "") {
        emailError.innerHTML = "Please Enter E-mail address";
    } else {
        if (email.match(emailExp)){
            emailError.innerHTML = "";
            emailStatus = true;
        } else {
            emailError.innerHTML = "Enter Valid Email I'd";
        }
    }
    
    //Password validation
    if(password === "") {
        passwordError.innerHTML =  "Create Password";
    } else {
        if (password.match(pswdExp)){
            passwordError.innerHTML = "";
            passwordStatus = true;
        } else {
            passwordError.innerHTML = "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character(@$!%*?&)";
        }
    }
    
  
    
    
    
    
    //Return validation
    if (nameStatus && mobileStatus && emailStatus && passwordStatus){
        return true;
    } else {
        return false;
    }
}