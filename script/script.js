function solveTask1() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result1").textContent = "Пожалуйста, введите все координаты.";
    }

    else if (c > a && c > b) {
        document.getElementById("result1").textContent = "Точка C должна быть между A и B.";

    }
    
    else {
        var ac = Math.abs(c - a);
        var bc = Math.abs(b - c);
        var product = ac * bc;
    
        document.getElementById("result1").textContent = `Произведение длин отрезков AC и BC: ${product}`;
    }
}

function solveTask2() {
    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number < 1000) {
        document.getElementById("result2").textContent = "Пожалуйста, введите число больше 999.";
    }
    else{
        var thousands = Math.floor(number / 1000) % 10; 

        document.getElementById("result2").textContent = `Цифра, соответствующая разряду тысяч: ${thousands}`;
    }

}

function solveTask3_1() {
    var ch1 = parseFloat(document.getElementById("ch1").value);
    var ch2 = parseFloat(document.getElementById("ch2").value);
    var ch3 = parseFloat(document.getElementById("ch3").value);

    if (ch1 === ch2 || ch2 === ch3 || ch3 === ch1) {
        document.getElementById("result3_1").textContent = `TRUE`;
    }  
    else {
        document.getElementById("result3_1").textContent = `FALSE`;
    }
}

function solveTask3_2() {
    var ch1_2 = parseFloat(document.getElementById("ch1_2").value);
    var ch2_2 = parseFloat(document.getElementById("ch2_2").value);
    var ch3_2 = parseFloat(document.getElementById("ch3_2").value);

    if (ch1_2 === ch2_2) {
        document.getElementById("result3_2").textContent = `Порядковый номер отличного числа: 3`;
    }  
    else if (ch1_2 === ch3_2){
        document.getElementById("result3_2").textContent = `Порядковый номер отличного числа: 2`;
    }
    else{
        document.getElementById("result3_2").textContent = `Порядковый номер отличного числа: 1`;
    }
}

function solveTask3_3() {
    var X_3 = parseFloat(document.getElementById("X_3").value);
    var result_3 = 0;

    if ( X_3 >= 2 && X_3 <=5){
        result_3 = X_3 + Math.cos(4.8*X_3);
    }
    else if (X_3 > 5){
        result_3 = Math.log(Math.abs(X_3 + Math.sqrt(4.8*X_3)));
    }
    else if (X_3 < 2){
        result_3 = Math.atan(0.64/((X_3)^2 + 1));
    }
    document.getElementById("result3_3").textContent = `При Х = ${X_3} Ответ: ${result_3}`;
}

function solveTask3_4() {
    var X_4 = parseFloat(document.getElementById("X_4").value);
    var result_4 = 0;

    switch (X_4){
        case 3:
            result_4 = X_4 + Math.cos(4.8*X_4);
            break;
        case 6:
            result_4 = Math.log(Math.abs(X_4 + Math.sqrt(4.8*X_4)));
            break;
        case 1:
            result_4 = Math.atan(0.64/((X_4)^2 + 1));
            break;
        case 4:
            result_4 = "Нет решения";
            break
        default:
            result_4 = "При таком значении не решаем";
    }

    document.getElementById("result3_4").textContent = `При Х = ${X_4} Ответ: ${result_4}`;
}