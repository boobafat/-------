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