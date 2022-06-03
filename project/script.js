function valideForm() {
    var name = document.getElementById("name").value;
    console.log(name);
    var login = document.getElementById("login").value;
    console.log(login);
    var password = document.getElementById("password").value;
    console.log(password);
    var email = document.getElementById("email").value;
    console.log(email);
    if (typeof (name) == 'string' && typeof (password) == 'string' && typeof (email) == 'string') {
        alert("Вы успешно зарегистрировались!")
    } else {
        alert("Проверьте правильность заполнения формы")

    }
}

function addtobusketbalenciaga() {
    size = document.getElementById("size")
    console.log(size)
    alert(size)
}
document.querySelector(".button").addEventListener("click", valideForm);
//document.querySelector(".balenciaga").addEventListener("click", addtobusketbalenciaga);
