
function saveDataSign() {
    getSignData();
    if (validateData()) {
        saveDataSignup();
    };




}
var userData = {
    Name: '',
    Email: null,
    Mobile: '',
    Password: ''

}
function getSignData() {
    userData.Name = document.getElementById("userName").value;
    userData.Email = document.getElementById("userEmail").value;
    userData.Mobile = document.getElementById("userMobNo").value;
    userData.Password = document.getElementById("userPassword").value;


}
function validateData() {

    var allSelected = true;
    if (userData.Name == null || userData.Name == "") {
        document.getElementById('userName').style.borderColor = "red";
        allSelected = false;
    }
    if (userData.Mobile == null || userData.Mobile == "") {
        document.getElementById('userMobNo').style.borderColor = "red";
        allSelected = false;
    }
    if (userData.Password == null || userData.Password == "") {
        document.getElementById('userPassword').style.borderColor = "red";
        allSelected = false;
    }
    if (userData.Email == null || userData.Email == "") {
        userData.Email == null;
    }

    if (allSelected == false) {
        document.getElementById('labelrequired').innerHTML = 'All Fields Are Required';
    }

    var x = document.getElementById("userPassword").value;
    var y = document.getElementById("userNewPassword").value;
    if (x != y) {
        alert("Password and Confirm Password does not matched!");
        allSelected = false;
    }

    return allSelected;
}

function saveDataSignup() {

    var ans = window.confirm("are you sure you want to save?");
    if (ans) {
        console.log(userData);
        signUp(userData);

        alert("Save Successfully");
    }

}
function logIn() {

    var mobile = document.getElementById("name").value;
    var password = document.getElementById("pwd").value;
    var user = {
        Mobile: mobile,
        Password: password
    }

    Promise.all([signIn(user)])
        .then(values => {
            console.log(values);
            res = values[0];
            console.log(res);
            if (res.status == 200) {
                document.getElementById('loginMsg').innerHTML = '';
                openHomePage();
            }
            else {
                console.log("Not Logged in");
                document.getElementById('loginMsg').innerHTML = 'Invalid user credentials';
            }
        });
}

function openHomePage() {
    window.open("mainPage.html");
}
function userSignUp() {

    window.open("signup.html");
}
function closeSignup() {
    window.close();
}
