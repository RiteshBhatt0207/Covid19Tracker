function showPassword() {
    var x = document.getElementById("userPassword");
    var y = document.getElementById("userNewPassword");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    }
    else {
        x.type = "password";
        y.type = "password";
    }


}