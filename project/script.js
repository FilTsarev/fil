function valideForm() {
    var name = document.getElementById("name").value;
    console.log(name);
    var login = document.getElementById("login").value;
    console.log(login);
    var password = document.getElementById("password").value;
    console.log(password);
    var email = document.getElementById("email").value;
    console.log(email);
    var reg_name = /^[а-яa-z]+$/i;
    var reg_password = /^[a-z0-9]{5,100}$/i;
    if (reg_name.test(name) == false) {
        alert("Введите имя корректно");
    }
    if (reg_password.test(password) == false) {
        alert("Введите пароль корректно");
    }
    if (reg_name.test(name) == true && reg_password.test(password) == true) {
        alert("Вы успешно зарегистрировались")
        user.text = name;
    }
}
document.querySelector(".button").addEventListener("click", valideForm);
