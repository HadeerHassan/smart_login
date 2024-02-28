//--------------signup-------------------------------------
var signUpbtn = document.getElementById("signUpbtn");
var userNameInput = document.getElementById("userNameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var logBtn = document.getElementById("loginBtn");
// signUpbtn.onclick=signUp;
// logBtn.onclick= logIn;
var welcome1=document.getElementById("welcome");
var user = {};
var users;
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
}
else {
    users = [];
}
//sign up function-----
function signUp() {

    user =
    {
        username: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,

    }


    var x = validateEmail(user.email);
    console.log(x);
    if (x == "true") {
        if (user.username != "" && user.email != "" && user.password != "") {

            users.push(user);
            console.log(users);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("correct").classList.replace("d-none", "d-block");
            document.getElementById("incorrect").classList.replace("d-block", "d-none");


            // location.href="welcome.html";
        } else {
            document.getElementById("correct").classList.replace("d-block", "d-none");
            document.getElementById("incorrect").classList.replace("d-none", "d-block");
        }
    }
    else {
        document.getElementById("correct").classList.replace("d-block", "d-none");
        document.getElementById("incorrect").innerHTML = "email already exist";
        document.getElementById("incorrect").classList.add("text-success");
        document.getElementById("incorrect").classList.replace("d-none", "d-block");

    }

}


function validateEmail(n) {
    var result = "true";
    for (var i = 0; i < users.length; i++) {

        console.log(users[i].email)
        if (n == users[i].email) {
            result = "false";
            console.log(" found");
        }
        // else 
        // {
        //     result="true"
        //     console.log("not found");
        // }

    }
    return result;
}

var result1 = "";

function validateLogin(e, p) {
    var flag = "false";
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    for (var i = 0; i < users.length; i++) {

        if (e == users[i].email && p == users[i].password) {
            result1 = users[i].username;
            console.log("found");
            flag = "true";
        }

    } return flag;
}

//----------------login function--------------
function logIn() {

    var e = emailInput.value;
    var p = passwordInput.value;

    var y = validateLogin(e, p);
    if (y == "true") {
        if (user.username != "" && user.email != "" && user.password != "") {



            document.getElementById("incorrect").classList.replace("d-block", "d-none");

          
           localStorage.setItem("username", result1);
           var result2=localStorage.getItem("username");
           console.log(result2);
           
            
        //    document.getElementById("welcome").innerHTML=`welcome${result1}`;
        //    location.href = "welcome.html"; 
        //    welcome1.innerHTML=`welcome${result2}`;
        welcomePage(function(){welcome1.innerHTML=`welcome${result2}`;});
           

        }
        else {

            document.getElementById("incorrect").classList.replace("d-none", "d-block");
        }
    }
    else {

        document.getElementById("incorrect").innerHTML = "incorrect email or password";
        document.getElementById("incorrect").classList.add("text-success");
        document.getElementById("incorrect").classList.replace("d-none", "d-block");

    }

}

function welcomePage(callback)
{
    location.href = "welcome.html"; 
    callback();
}

         