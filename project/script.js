//function guess() {
    //var guessnumber = 5;
    //var ournumber = prompt("Введите число:")
    //if (ournumber > guessnumber) {
        //alert("Число должно быть меньше");
        //return guess();
    //} else if (ournumber == guessnumber) {
        //return alert("Вы угадали!")
    //} else {
        //alert("Число должно быть меньше");
        //return guess();
    //} 
//}
function reminder() {
    alert("Ты здесь слишком долго!");
    
}
//setTimeout(reminder, 3000);
function valideForm() {
    alert("Проверка формы");
    var name = document.getElementById("name").value;
    console.log(name);
}
document.querySelector(".button").addEventListener("click", valideForm);