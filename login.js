function submit_fun() {
    var username = String(document.getElementById("user_name").value);
    var password = String(document.getElementById("pass_word").value);
    if(username || password == 0) {
        if(username == 0) {
            document.getElementById("alert_code_1").innerHTML = "*Fill the username detail";
            document.getElementById("alert_code_2").innerHTML = null;
        }
        else if(password == 0) {
            document.getElementById("alert_code_1").innerHTML = "*Fill the password detail";
            document.getElementById("alert_code_2").innerHTML = null;
        }
    }
    if(username && password != 0) {
        var size = password.length;
        if(size >= 4) {
            document.getElementById("alert_code_1").innerHTML = null;
            document.getElementById("alert_code_2").innerHTML = "Every detail has been filled correctly.";
        }
        else {
            document.getElementById("alert_code_1").innerHTML = "*Size of the password must be greater than or equal to 4 characters";
        }
    }
}

function req_hash() {
    var password = String(document.getElementById("pass_word").value);
    var size = password.length;
    var arr = password[0]+password[1]+password[2]+password[3];
    if(size > 6) {
        document.getElementById("hash_password").innerHTML = " Hashed password = "+arr;
        document.getElementById("org_password").innerHTML = " Original password = "+password;
        document.getElementById("alert_code").innerHTML = null;
    }
    else {
        document.getElementById("hash_password").innerHTML = null;
        document.getElementById("org_password").innerHTML = null;
        document.getElementById("alert_code").innerHTML = "*Password must be greater than 6 digits";
    }
}

function req_clear_alert_code() {
    document.getElementById("alert_code_1").innerHTML = null;
    document.getElementById("alert_code_2").innerHTML = null;
    document.getElementById("hash_password").innerHTML = null;
    document.getElementById("org_password").innerHTML = null;
    document.getElementById("alert_code").innerHTML = null;
}