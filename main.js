function password() {
    const _password = "Asa-kawa";
    const user_password = prompt("パスワードを入力してください");
    if (user_password == false || user_password == null) {
        alert("パスワードが入力されてません");
        password();
    } else if(user_password != _password) {
        alert("パスワードが間違ってます");
        password();
    } else {
        alert("パスワードが合ってます");
    }
}

//window.onload=password();
