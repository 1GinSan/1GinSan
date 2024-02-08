function signup() {


    let signupbox = document.getElementById("Signup_box");
    let logintext = document.getElementById("logintext");
    let signuptext = document.getElementById("signuptext");
    let loginbox = document.getElementById("login_box");

    if(signupbox.getAttribute("hidden"))
    {
        signupbox.removeAttribute("hidden");
        loginbox.setAttribute("hidden","hidden");
        logintext.removeAttribute("hidden");
        signuptext.setAttribute("hidden","hidden");
    }
}

function logup() {

    let signupbox = document.getElementById("Signup_box");
    let logintext = document.getElementById("logintext");
    let signuptext = document.getElementById("signuptext");
    let loginbox = document.getElementById("login_box");

    if(loginbox.getAttribute("hidden"))
    {
        
        signupbox.setAttribute("hidden","hidden");
        loginbox.removeAttribute("hidden");
        logintext.setAttribute("hidden","hidden");
        signuptext.removeAttribute("hidden");
    }
}