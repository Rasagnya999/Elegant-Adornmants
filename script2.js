function Homesubscribe() {
    const email = document.getElementById("email").value
    const emailError = document.getElementById("emailError");
    let emailstatus =  false;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    
    //E-Mail validation
    if(email === "") {
        emailError.innerHTML = "Please Enter E-mail address";
    } else {
        if (email.match(emailExp)){
            emailError.innerHTML = " Thank You";
                        emailstatus= true;
        } else {
            emailError.innerHTML = "Enter Valid Email I'd";
        }
    }
    
    emailError.style.color="green"
    //Return validation
    if (emailstatus){
        return true;
    } else {
        return false;
    }}


    ////Rings
    function RingsSubscribe() {
        const emailRings = document.getElementById("emailRings").value
        const emailErrorRings = document.getElementById("emailErrorRings");
     
        
        let emailRingsstatus =  false;
        const emailRingsExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        
        //E-Mail validation
        if(emailRings === "") {
            emailErrorRings.innerHTML = "Please Enter E-mail address";
        } else {
            if (emailRings.match(emailRingsExp)){
                emailErrorRings.innerHTML = "Thanks for subscribing";
                            emailRingsstatus= true;
            } else {
                emailErrorRings.innerHTML = "Enter Valid Email I'd";
            }
        }
        
      
        //Return validation
        if (emailRingsstatus){
            return true;
        } else {
            return false;
        }}
    


         ////About us
    function AboutSubscribe() {
        const emailAbout = document.getElementById("emailAbout").value
        const emailErrorAbout = document.getElementById("emailErrorAbout");
     
        
        let emailAboutstatus =  false;
        const emailAboutExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        
        //E-Mail validation
        if(emailAbout === "") {
            emailErrorAbout.innerHTML = "Please Enter E-mail address";
        } else {
            if (emailAbout.match(emailAboutExp)){
                emailErrorAbout.innerHTML = "Thanks for subscribing";
                            emailAboutstatus= true;
            } else {
                emailErrorAbout.innerHTML = "Enter Valid Email I'd";
            }
        }
        
      
        //Return validation
        if (emailstatusAbout){
            return true;
        } else {
            return false;
        }}
    

               ////Pendants
    function PendantSubscribe() {
        const emailPendant = document.getElementById("emailPendant").value
        const emailErrorPendant = document.getElementById("emailErrorPendant");
     
        
        let emailPendantstatus =  false;
        const emailPendantExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        
        //E-Mail validation
        if(emailPendant === "") {
            emailErrorPendant.innerHTML = "Please Enter E-mail address";
        } else {
            if (emailPendant.match(emailPendantExp)){
                emailErrorPendant.innerHTML = "Thanks for subscribing";
                            emailPendantstatus= true;
            } else {
                emailErrorPendant.innerHTML = "Enter Valid Email I'd";
            }
        }
        
      
        //Return validation
        if ( emailPendantstatus){
            return true;
        } else {
            return false;
        }}
    
