// alert("Я JavaScript"); 
// alert("Hello World");

// [1, 2] .forEach(alert)

// let admin, name;//объявили переменные
// name = "John"; //значение для переменной name   
// admin = name; //приравняли переменную админ к нэйм
// alert(admin);

// let earthName = "Zemlya";
// let currentUserName = "John";

function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, 
    exp.length-1);
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp); 
    }
}