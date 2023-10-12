function showError(msg) {
    let error =  document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate() {
    let name = document.getElementById("txtName").value
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    let confirmpassword = document.getElementById("txtConfirmPassword").value

    let genderMale = document.getElementById("rMale").checked
    let genderFemale = document.getElementById("rFemale").checked
    let chkBox = document.getElementById("checkAgree").checked

    if (name == "") {
        return showError("Name must be filled")
    }

    else if (email.indexOf('@') == -1) {
        return showError("Email must contain '@'")
    }

    else if (!email.endsWith(".com")) {
        return showError("Email must ends with .com")
    }

    else if (password.length < 5 || password.length > 16) {
        return showError("Password must be 5 - 16 characters")
    }

    else if (!hasSpecialChar(password)) {
        return showError("Password must contain a special character")
    }

    else if (password != confirmpassword) {
        return showError("Password and Confirm Password must be same")
    }

    else if (genderMale == false && genderFemale == false) {
        return showError("Gender must be selected")
    }

    else if (chkBox == false) {
        return showError("Must agree to terms and conditions")
    }
}

function hasSpecialChar(str) {
    for (let i = 0; i < str.length; i++) {
        
        if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9'))) {
            return true
        }
    }
    return false
}