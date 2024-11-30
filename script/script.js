function Burger() {
    let menu = document.getElementById("burger_menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

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
    var ch1 = parseInt(document.getElementById("ch1").value);
    var ch2 = parseInt(document.getElementById("ch2").value);
    var ch3 = parseInt(document.getElementById("ch3").value);

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

function solveTask4_1() {
    let numbers = document.getElementById("numbers").value.trim();
    let inputNumbers = numbers.split(" ").map(Number);

    let result = "";
    let previous = null;
    for (let i = 0; i < inputNumbers.length; i++) {

        let current = inputNumbers[i];
        
        if (current !== previous) {
            result += current + " ";
            previous = current;
        }
    }

    document.getElementById("result4_1").textContent = 'Ответ: ' + result;
}

function solveTask4_2() {
    let A = parseInt(document.getElementById("A4").value);
    let N = parseInt(document.getElementById("N4").value);
    var sum = 1; 
    var term = 1; 

    for (let i = 1; i <= N; i++) {
        term *= A; 
        sum += term; 
    }

    document.getElementById("result4_2").textContent = 'Ответ: ' + sum;
}

function PLAY() {
    console.log('Кнопка PLAY нажата!'); // Проверка, что функция срабатывает

    let zone = document.getElementById("gameZone");
    let characterImage = document.getElementById("characterImage");
    let backgroundImage = document.getElementById("backgroundImage");
    let textElement = document.getElementById("dialogue");

    if (zone.style.display === "none" || zone.style.display === "") {
        zone.style.display = "block";
        backgroundImage.src = "../images/start.jpg";
        backgroundImage.style.display = "block";
        typeWriter("Райан Гослинг в новелле про пропавшую Люси", textElement);
    } else {
        zone.style.display = "none";
        characterImage.style.display = "none";
        backgroundImage.style.display = "none";
        textElement.innerText = "";
    }
}


const story = {
    start: {
        text: [
            "Райан просматривал старые сообщения на своём коммуникаторе, когда экран внезапно замигал, и появилось зашифрованное уведомление.",
            "Сердце застучало быстрее — отправитель был анонимным, но текст показался до боли знакомым.",
            "Через мгновение устройство расшифровало послание.",
            "Люси ещё жива. Найди её в Оазисе."
        ],
        image: "../images/start.webp",  // Путь к картинке для сцены start
        choices: [
            { text: "Отправиться в Оазис немедленно", next: "go_oasis" },
            { text: "Попробовать расшифровать больше данных", next: "decrypt_data" }
        ]
    },
    go_oasis: {
        text: "Райан собирает снаряжение и отправляется в путь. На горизонте уже виднеются очертания Оазиса...",
        image: "../images/Oasis.webp",  // Путь к картинке для сцены go_oasis
        choices: [
            { text: "Войти осторожно", next: "cautious_entry" },
            { text: "Ворваться с боем", next: "combat_entry" }
        ]
    },
    decrypt_data: {
        text: "Райан находит скрытые координаты и узнаёт больше об Оазисе. Это место может быть опаснее, чем он думал.",
        image: "../images/decrypt_data.webp",  // Путь к картинке для сцены decrypt_data
        choices: [
            { text: "Теперь отправиться в Оазис", next: "go_oasis" },
            { text: "Связаться с союзниками", next: "contact_allies" }
        ]
    },
    cautious_entry: {
        text: "Райан тихо пробирается в Оазис, избегая охранников. Он чувствует, что на верном пути.",
        image: "../images/cautious_entry.webp",
        choices: [
            { text: "Исследовать Оазис дальше", next: "find_love" }
        ]
    },
    find_love: {
        text: "Райан находит люси в плену, время на исходе...",
        image: "../images/find_love.webp",
        choices: [
            { text: "Спасти по тихому", next: "result_find" },
            { text: "Испугаться и убежать", next: "find_run" }
        ]
    },
    find_run:{
        text: "Райн понял, что Люси, не единственная девушка, поэтому побежал домой",
        image: "../images/find_run.webp",
        choices: [
            { text: "Начать историю сначала", next: "start" }
        ]        
    },
    result_find:{
        text: "Райн спасает Люси. Они убагают из Оазиса и начинают новую жизнь.",
        image: "../images/result_find.webp",
        choices: [
            { text: "Начать историю сначала", next: "start" }
        ]        
    },
    combat_entry: {
        text: "Райан врывается с боем, но его сразу окружают. Шансы выбраться живым минимальны...",
        image: "../images/okruzhenie.webp",
        choices: []
    },
    contact_allies: {
        text: "Райан зовёт на помощь старых друзей, но друзья на то и старые, что их уже нет",
        image: "../images/contact_allies.webp",
        choices: [
            { text: "Продолжить одиночное задание", next: "go_oasis" }
        ]
    },
    explore_oasis: {
        text: "Райан исследует Оазис и находит скрытую лабораторию. Здесь есть что-то странное...",
        image: "../images/laboratory.webp",
        choices: [
            { text: "Исследовать лабораторию", next: "explore_lab" }
        ]
    },
    explore_lab: {
        text: "Райан проникает в лабораторию и обнаруживает закрытую дверь с кодом, а также чулан уборщика",
        image: "../images/explore_lab.webp",
        choices: [
            { text: "Ввести код от двери", next: "check" },
            { text: "Зайти в чулан", next: "explore_stafRoom" }
        ]
    },
    explore_stafRoom: {
        text: "Райан проникает в чулан и видит записку, на которой написано: У меня Беда Беда с головой, начальник сказал пароль эээ 202 и что-то между 6 и  ээээ",
        image: "../images/explore_stafRoom.webp",
        choices: [
            { text: "Вернуться обратно", next: "explore_lab" },
            { text: "Поискать еще чего", next: "find_someStaf" }
        ]
    },
    find_someStaf: {
        text: [
            "Райн поискал за шторкой и ничего не нашел",
            "Поискал в сундуке и не не нашел",
            "Посмотрел под ковриком и все также ничего",
            "Страннооооо....",
            "Подумал Райан",
            "Возможно эта сцена чтобы затянуть сюжет..."
        ],
        image: "../images/find_someStaf.webp",
        choices: [{ text: "Вернуться обратно", next: "explore_stafRoom" }]
    },
    check: {
        image: "../images/check.webp",
        choices: [{ text: "Вернуться обратно", next: "explore_stafRoom" }]
    },
    meet_allies: {
        text: "Союзники Райана приходят на помощь, и теперь у него есть новая информация для следующего шага.",
        choices: []
    },
    return_base: {
        text: "Райан возвращается на базу, но Оазис всё время манит его. Что-то подсказывает ему, что он не закончил свою миссию.",
        choices: []
    }
};

let currentTextIndex = 0;
let currentSceneKey = 'start';

function enterCode(sceneKey, pass) {
    let scene = sceneKey;
    const dialogueElement = document.getElementById('dialogue');
    const inpass = document.getElementById('pwinp');
    const butpass = document.getElementById('pwrd');

    let pr = parseInt(document.getElementById("pwinp").value);

    if (pr === pass) {
        inpass.style.display = 'none';
        butpass.style.display = 'none';
        currentSceneKey = scene.choices[0].next;
        displayScene(currentSceneKey);
        displayChoices(currentSceneKey)

    } else {
        dialogueElement.innerText = "Не открывается";
    }
}

// Функция для анимации печати текста
function typeWriter(text, element, callback) {
    // Заменяем несколько пробелов на единичный пробел
    text = text.replace(/\s+/g, ' ');

    let i = 0;
    const speed = 15;  // Скорость печати (в миллисекундах между символами)
    element.innerText = ''; // Очищаем элемент перед началом

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed); // Рекурсивный вызов для следующего символа
        } else if (callback) {
            callback(); // Вызов обратного вызова по завершению печати
        }
    }

    type();
}

function displayChoices(scene) {
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');

    if (scene.choices && scene.choices.length > 0) {
        choice1.innerText = scene.choices[0].text;
        choice1.style.display = 'inline-block';
        choice1.onclick = () => {
            currentSceneKey = scene.choices[0].next;
            displayScene(scene.choices[0].next);
        };

        if (scene.choices.length > 1) {
            choice2.innerText = scene.choices[1].text;
            choice2.style.display = 'inline-block';
            choice2.onclick = () => {
                currentSceneKey = scene.choices[1].next;
                displayScene(scene.choices[1].next);
            };
        } else {
            choice2.style.display = 'none';
        }
    } else {
        choice1.style.display = 'none';
        choice2.style.display = 'none';
    }
}

// Стрелка для прокрутки текста
document.getElementById('arrowBtn').onclick = function() {
    displayScene(currentSceneKey);
};


function displayScene(sceneKey) {
    const scene = story[sceneKey];
    const dialogueElement = document.getElementById('dialogue');
    const combatButton = document.getElementById('combatButton');
    const arrowBtn = document.getElementById('arrowBtn');
    const inpass = document.getElementById('pwinp');
    const butpass = document.getElementById('pwrd');
    const screenElement = document.getElementById('screen');  // Элемент, где будет отображаться изображение
    if (sceneKey === 'combat_entry') {
        startCombat('explore_oasis');  // Запускаем механику боя
    } 
    else {
        // Скрываем кнопку боя при других сценах
        combatButton.style.display = 'none';
    }

    if (sceneKey === 'check'){
        dialogueElement.innerText = ""; 
        displayChoices(scene)
        inpass.style.display = 'block';
        butpass.style.display = 'block';
    }
    // Обновляем картинку для текущей сцены
    if (scene.image) {
        // Создаём новый элемент <img> для картинки
        const imageElement = document.createElement('img');
        imageElement.src = scene.image;  // Устанавливаем путь к картинке
        imageElement.alt = "Scene image";  // Альтернативный текст изображения
        imageElement.style.display = 'block';  // Убедимся, что картинка будет видимой

        // Очищаем экран перед добавлением новой картинки
        screenElement.innerHTML = '';  
        screenElement.appendChild(imageElement);  // Добавляем картинку на экран
    }

    // Если текст состоит из массива сообщений, показываем одно за раз
    if (Array.isArray(scene.text)) {
        typeWriter(scene.text[currentTextIndex], dialogueElement, function() {
            currentTextIndex++;
            if (currentTextIndex >= scene.text.length) {
                currentTextIndex = 0;
                displayChoices(scene);
                arrowBtn.style.display = 'none';  // Прячем стрелку
            }
        });
    } else {
        typeWriter(scene.text, dialogueElement, function() {
            displayChoices(scene);
            arrowBtn.style.display = 'none';  // Прячем стрелку, если нет текста для пролистывания
        });
    }


}

function resetGame() {
    currentTextIndex = 0;  // Сброс индекса текста
    document.getElementById('choice1').style.display = 'none';  // Скрыть кнопки выбора
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('combatButton').style.display = 'none';  // Скрыть кнопку боя
    document.getElementById('arrowBtn').style.display = 'inline-block';  // Показать стрелку
    const dialogueElement = document.getElementById('dialogue');
    dialogueElement.innerText = "";  // Очистить текст диалога
}

function handleDefeat() {
    const dialogueElement = document.getElementById('dialogue');
    const rulesElement = document.getElementById('rules'); // Если у вас есть правила/текст инструкций
    document.getElementById('combatButton').style.display = 'none'; 
    rulesElement.style.display = 'none';
    dialogueElement.innerText = "Вы не успели... Начните заново!";
    setTimeout(() => {
        resetGame();  // Сброс интерфейса
        currentSceneKey = 'start';
        displayScene(currentSceneKey);  // Запуск стартовой сцены
    }, 2000);  // Задержка 2 секунды перед перезапуском
}

let clickCount = 0;  // Счётчик кликов
let timer;           // Таймер

function startCombat(sceneKey) {
    clickCount = 0;  // Сбрасываем счётчик кликов
    const combatButton = document.getElementById('combatButton');
    const dialogueElement = document.getElementById('dialogue');
    let rulesElement = document.getElementById('rules');

    // Обновляем текст инструкции и проверяем выполнение
    rulesElement.style.display = 'block';
    rulesElement.innerText = "Нажмите на кнопку 30 раз за 15 секунд, чтобы выжить!";
    
    // Скрываем кнопку перед её отображением
    combatButton.style.display = 'none';

    // Задержка перед отображением кнопки, чтобы текст точно появился раньше
    combatButton.style.display = 'inline-block'; // Показываем кнопку после задержки 

    // Скрываем выборы на время боя
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';

    // Запускаем таймер на 15 секунд
    timer = setTimeout(() => {

        if (clickCount >= 30) {
            // Победа
            rulesElement.style.display = 'none';
            dialogueElement.innerText = "Вы победили и вырвались из окружения!";
            combatButton.style.display = 'none';
            // currentSceneKey = 'explore_oasis'; // Следующая сцена
            setTimeout(() => displayScene(sceneKey), 2000); // Переход через 2 сек.
        } else {
            handleDefeat();  // Вызов функции перезапуска
        }
    }, 15000); // 15 секунд на выполнение задачи
}


document.getElementById('combatButton').onclick = function() {
    clickCount++;
};

