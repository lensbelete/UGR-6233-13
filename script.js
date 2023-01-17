function login(){
    var uname= document.getElementById("email").value;
    var uname= document.getElementById("pwd1").value;
    if (uname==''){
        alert("please enter user name.");
    }
    else if (pwd1==''){
        alert("enter the password");
    }
    else if (pwd1.length<6 || pwd1.length>6){
        alert("password min and max length is 6");
    }
    else{
        alert('thank you for login in and you are are redirecting to your profile page.');
        window.location.href="yourProfile.html";
    }
}
function clearFunc(){
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}
