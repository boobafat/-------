function solveTask1() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result1").textContent = "Пожалуйста, введите все координаты.";
        return;
    }

    if (c <= Math.min(a, b) || c >= Math.max(a, b)) {
        document.getElementById("result1").textContent = "Точка C должна быть между A и B.";
        return;
    }

    const ac = Math.abs(c - a);
    const bc = Math.abs(b - c);
    const product = ac * bc;

    document.getElementById("result1").textContent = `Произведение длин отрезков AC и BC: ${product}`;
}

function solveTask2() {
    const number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number < 1000) {
        document.getElementById("result2").textContent = "Пожалуйста, введите число больше 999.";
        return;
    }

    const thousands = Math.floor(number / 1000) % 10; 

    document.getElementById("result2").textContent = `Цифра, соответствующая разряду тысяч: ${thousands}`;
}