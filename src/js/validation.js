function ValidateForm(){
    if(UnameValidate() && EmailValidate() &&  ValidationPassword() && ValidationRPassword())
    {        
        return true;
    }
    else
        return false;
}

function UnameValidate(){
    var uname = document.signupform.uname;    
    if(uname.value==null || uname.value==""){
        document.getElementById("uname_alert").innerHTML = "Name Can not be Empty!";
        uname.style.borderColor = "red";
        // uname.focus();
        return false; 
    }
    document.signupform.email.focus();
    document.getElementById("uname_alert").innerHTML = "";
    uname.style.borderColor = "rgb(0, 150, 0)";
    return true;
}
function EmailValidate()
{
    var uemail = document.signupform.email;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(uemail.value)
    if(uemail.value.match(mailformat))
    {
        document.getElementById("email_alert").innerHTML = "";
        uemail.style.borderColor = "rgb(0, 150, 0)";
        document.signupform.password.focus();
        return true;
    }
    else
    {
        document.getElementById("email_alert").innerHTML = "Enter Valid Email Address!";
        uemail.style.borderColor = "red";
        // uemail.focus();
        return false;
    }
}
function ValidationPassword()
{
    var password = document.signupform.password;    
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!password.value.match(lowerCaseLetters))
    {
        document.getElementById("password_alert").innerHTML = "Password should contain a LowerCase letter";   
        password.style.borderColor = "red";     
        // password.focus();
        return false;
    }
    // else if (!password.value.match(upperCaseLetters))
    // {
    //     document.getElementById("password_alert").innerHTML = "Password should contain a UpperCase letter";   
    //     password.style.borderColor = "red";     
    //     // password.focus();
    //     return false;
    // }
    else if (!password.value.match(numbers))
    {
        document.getElementById("password_alert").innerHTML = "Password should contain A Number";   
        password.style.borderColor = "red";     
        // password.focus();
        return false;
    }
    else if(password.value.length < 8)
    {
        document.getElementById("password_alert").innerHTML = "Password should contain minimum 8 letters";   
        password.style.borderColor = "red";     
        // password.focus();
        return false;
    }
    else
    {
        document.getElementById("password_alert").innerHTML = "";
        password.style.borderColor = "rgb(0, 150, 0)";
        document.signupform.rpassword.focus();
        return true;
    }
}
function ValidationRPassword()
{
    var password = document.signupform.password;
    var rpassword = document.signupform.rpassword;
    if(password.value!==rpassword.value)
    {
        document.getElementById("rpassword_alert").innerHTML = "Both Password must be Same";   
        rpassword.style.borderColor = "red";     
        // rpassword.focus();
        return false;
    }
    document.getElementById("rpassword_alert").innerHTML = "";
    rpassword.style.borderColor = "rgb(0, 150, 0)";
    document.signupform.submit.focus();
    document.signupform.submit.disabled = "false";
    return true;
}