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
    let sum = 1; 
    let term = 1; 

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
    let disp = document.getElementById("disp");

    if (zone.style.display === "none" || zone.style.display === "") {
        zone.style.display = "block";
        backgroundImage.src = "../images/start.jpg";
        backgroundImage.style.display = "block";
        typeWriter("Райан Гослинг в новелле про пропавшую Люси", textElement);
        disp.style.display = 'none';
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
        image: "../images/start.webp",
        choices: [
            { text: "Отправиться в Оазис немедленно", next: "go_oasis" },
            { text: "Попробовать расшифровать больше данных", next: "decrypt_data" }   
        ]
    },
    go_oasis: { // Отправиться в Оазис немедленно
        text: "Райан собирает снаряжение и отправляется в путь. На горизонте уже виднеются очертания Оазиса...",
        image: "../images/Oasis.webp", 
        choices: [
            { text: "Войти осторожно", next: "cautious_entry" },
            { text: "Ворваться с боем", next: "combat_entry" }
        ]
    },
    decrypt_data: { // Попоробовать расшифровать больше данных
        text: "Райан находит скрытые координаты и узнаёт больше об Оазисе. Это место может быть опаснее, чем он думал.",
        image: "../images/decrypt_data.webp",  // Путь к картинке для сцены decrypt_data
        choices: [
            { text: "Теперь отправиться в Оазис", next: "go_oasis" }, 
            { text: "Связаться с союзниками", next: "contact_allies" }
        ]
    },
    cautious_entry: { // Войти острожно
        text: "Райан тихо пробирается в Оазис, избегая охранников. Он чувствует, что на верном пути.",
        image: "../images/cautious_entry.webp",
        choices: [
            { text: "Исследовать Оазис дальше", next: "find_love" }
        ]
    },    find_love: { // Исследовать оазис дальше
        text: "Райан находит люси в плену, время на исходе...",
        image: "../images/find_love.webp",
        choices: [
            { text: "Спасти по тихому", next: "result_find" },
            { text: "Испугаться и убежать", next: "find_run" }
        ]
    },
    find_run:{ // Испугаться и убежать
        text: "Райн понял, что Люси, не единственная девушка, поэтому побежал домой",
        image: "../images/find_run.webp",
        choices: [
            { text: "Начать историю сначала", next: "start" }
        ]        
    },
    result_find:{ // Спасьи по тихому
        text: "Райн спасает Люси. Они убагают из Оазиса и начинают новую жизнь.",
        image: "../images/result_find.webp",
        choices: [
            { text: "Начать историю сначала", next: "start" }
        ]        
    },
    combat_entry: { // Сцена с дракой
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
    explore_oasis: { // Сцена после драки
        text: "Райан исследует Оазис и находит скрытую лабораторию. Здесь есть что-то странное...",
        image: "../images/laboratory.webp",
        choices: [
            { text: "Исследовать лабораторию", next: "explore_lab" }
        ]
    },
    explore_lab: { // Исследовать лабораторию 
        text: "Райан проникает в лабораторию и обнаруживает закрытую дверь с кодом, а также чулан уборщика",
        image: "../images/explore_lab.webp",
        choices: [
            { text: "Ввести код от двери", next: "check" },
            { text: "Зайти в чулан", next: "explore_stafRoom" }
        ]
    },
    explore_stafRoom: { // Зайти в чулан
        text: "Райан проникает в чулан и видит записку, на которой написано: У меня Беда Беда с головой, начальник сказал пароль эээ 202 и что-то между 6 и  ээээ",
        image: "../images/explore_stafRoom.webp",
        choices: [
            { text: "Вернуться обратно", next: "explore_lab" },
            { text: "Поискать еще чего", next: "find_someStaf" }
        ]
    },
    find_someStaf: { // Поискать еще чего 
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
    check: { // Сцена с открытием двери
        image: "../images/check.webp",
        choices: [{ text: "Вернуться обратно", next: "explore_lab" }]
    },
    select_lab: { // Сцена в лаборатории после открытия двери
        text: "Открыв дверь, Райан увидел галограмму одного свитка, а также ключи от машины",
        image: "../images/select_lab.webp",
        choices: [
            { text: "Использовать свиток", next: "svitok" },
            { text: "Взять ключи от машины", next: "find_car" }
        ]
    },
    svitok: { // Использовать свиток
        text: "Теперь Райан умеет играть в камень ножницы бумага!",
        image: "../images/svitok.webp",
        choices: [
            { text: "Встретиться с злодеем", next: "enemy" }
        ]
    },
    enemy:{ // Встреча с боссом
        text: [
            "***: Вот мы с тобой и встретились Райн",
            "Райн: Ты кто такой и зачем ты украл мою Люси?",
            "Мега Задира: Я Мега Задира и я решил тебе таким образом отомстить",
            "Райн: Но.... ЗА что?",
            "Мега Задира: НЕВАЖНО, настал момент расплаты",
            "Райн: Хорошо, я готов к нашей битве",
            "Мега Задира: Тебе нужно обыграть в К.Н.Б. 3 раза и тогда я освобожу Люси",
            "Райн: Эмммм... Что? Так вот зачем свиток"
        ],
        image: "../images/enemy.webp",
        choices: [
            { text: "Сразиться", next: "fight" }
        ]
    }, // Бой с боссом 
    fight:{ // Камень ножницы бумага
        image: "../images/fight.webp",
        choices: []
    },
    fight_win:{ // Камень ножницы бумага финальная победа
        text: " Райан Гослинг победил Мега Задиру. Мир спасен.",
        image: "../images/fight_win.webp",
        choices: [{ text: "Забрать Люси", next: "final" }]
    },
    fight_lose:{// Камень ножницы бумага финальное поражение
        text: " Мега Задира победил Райана. Это конец...",
        image: "../images/fight_lose.webp",
        choices: [{ text: "Начать историю сначала", next: "start" }]
    },
    final:{ // Финал
        text: " Райн Гослинг спас Люси. Все наладилось. Жизнь стала прекрасной.",
        image: "../images/result_find.webp",
        choices: [{ text: "Начать историю сначала", next: "start" }]
    },
    draw:{ // Ничья
        text: "НИЧЬЯ",
        image: "../images/draw.webp",
        choices: [{ text: "Еще раз", next: "fight" }]
    },
    lose:{ // Поражение
        text: "Поражение",
        image: "../images/lose.webp",
        choices: [{ text: "Еще раз", next: "fight" }]
    },
    win:{ // Победа
        text: "Победа",
        image: "../images/win.webp",
        choices: [{ text: "Еще раз", next: "fight" }]
    },
    find_car:{ // Взять ключи
        text: "Райн находит ту самую машину из Drive",
        image: "../images/find_car.webp",
        choices: [
            { text: "Сесть в машину", next: "try_car" }
        ]
    }, 
    try_car:{ // Сесть в машину
        text: "Райана окутала печаль, ведь машина не завелась, но и эта история не про это",
        image: "../images/try_car.webp",
        choices: [
            { text: "Все таки забрать свиток", next: "svitok" }
        ]
    }
};

let currentTextIndex = 0;
let currentSceneKey = 'start';

function enterCode(sceneKey, pass) {
    let scene = sceneKey;
    let dialogueElement = document.getElementById('dialogue');
    let inpass = document.getElementById('pwinp');
    let butpass = document.getElementById('pwrd');

    let pr = parseInt(document.getElementById("pwinp").value);

    if (pr === pass) {
        inpass.style.display = 'none';
        butpass.style.display = 'none';
        currentSceneKey = 'select_lab';
        displayScene(currentSceneKey);
        displayChoices(currentSceneKey)

    } else {
        dialogueElement.innerText = "Не открывается";
    }
}

// Функция для анимации печати текста
let currentTypeWriterTimeout = null; // Глобальная переменная для хранения ID таймайута

function typeWriter(text, element, callback) {
    // Оччистка таймаутов
    if (currentTypeWriterTimeout) {
        clearTimeout(currentTypeWriterTimeout);
    }

    text = text.replace(/\s+/g, ' ');
    let i = 0;
    let speed = 15;
    element.innerText = ''; 

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            currentTypeWriterTimeout = setTimeout(type, speed);
        } else {
            currentTypeWriterTimeout = null;
            if (callback) {
                callback();
            }
        }
    }

    type();
}

function displayChoices(scene) {
    let choice1 = document.getElementById('choice1');
    let choice2 = document.getElementById('choice2');   

    if (scene.choices && scene.choices.length > 0) {
        choice1.innerText = scene.choices[0].text;
        choice1.style.display = 'inline-block';
        choice1.onclick = () => {
            if (scene.choices[0].text === "Начать историю сначала"){
                resetGame();
                currentSceneKey = 'start';
                displayScene(currentSceneKey);
            }  
            else{
                currentSceneKey = scene.choices[0].next;
                displayScene(scene.choices[0].next);    
            }
        };

        if (scene.choices.length > 1) {
            choice2.innerText = scene.choices[1].text;
            console.log(currentSceneKey);
            choice2.style.display = 'inline-block';
            choice2.onclick = () => {
                currentSceneKey = scene.choices[1].next;
                displayScene(scene.choices[1].next);
            };
        } else {
            choice2.style.display = 'none';
        }
    }
    else {
        choice1.style.display = 'none';
        choice2.style.display = 'none';
    }
}

// Стрелка для прокрутки текста
document.getElementById('arrowBtn').onclick = function() {
    displayScene(currentSceneKey);
};


function displayScene(sceneKey) {
    let scene = story[sceneKey];
    let dialogueElement = document.getElementById('dialogue');
    let combatButton = document.getElementById('combatButton');
    let arrowBtn = document.getElementById('arrowBtn');
    let inpass = document.getElementById('pwinp');
    let butpass = document.getElementById('pwrd');
    let screenElement = document.getElementById('screen');  // Элемент, где будет отображаться изображение
    if (sceneKey === 'combat_entry') {
        startCombat('explore_oasis');  // Запускаем механику боя
    } 
    else {
        inpass.style.display = 'none';
        butpass.style.display = 'none';
        combatButton.style.display = 'none';
    }

    if (sceneKey === 'fight') {
        dialogueElement.innerText = ""; 
        document.getElementById('fight').style.display = 'block';  // Показать кнопки боя
        document.getElementById('choice1').style.display = 'none';  // Скрыть другие кнопки выбора
        document.getElementById('choice2').style.display = 'none';
    } else if (sceneKey === 'draw' || sceneKey === 'lose' || sceneKey === 'win'){
        document.getElementById('fight').style.display = 'none';
    }

    if (sceneKey === "enemy"){
        arrowBtn.style.display = 'block';
        document.getElementById('choice1').style.display = 'none';  // Скрыть другие кнопки выбора
        document.getElementById('choice2').style.display = 'none';
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
        let imageElement = document.createElement('img');
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
    let dialogueElement = document.getElementById('dialogue');
    dialogueElement.innerText = "";  // Очистить текст диалога
}

function handleDefeat() {
    let dialogueElement = document.getElementById('dialogue');
    let rulesElement = document.getElementById('rules'); // Если у вас есть правила/текст инструкций
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
    let combatButton = document.getElementById('combatButton');
    let dialogueElement = document.getElementById('dialogue');
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

let wins = 0;
let loses = 0;
const choices = ['Камень', 'Ножницы', 'Бумага'];

function fight(userChoice) {
    let enemyChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === enemyChoice) {
        displayScene('draw');
        // alert(`Ничья! Оба выбрали ${userChoice}`);
    } else if (
        (userChoice === 'Камень' && enemyChoice === 'Ножницы') ||
        (userChoice === 'Ножницы' && enemyChoice === 'Бумага') ||
        (userChoice === 'Бумага' && enemyChoice === 'Камень')
    ) {
        wins++;
        displayScene('win');
    } else {
        loses++;
        displayScene('lose');
    }

    updateScore();  // Обновление счётчика

    if (wins === 3) {
        updateScore();
        displayScene('fight_win'); // Следующая сцена после победы
        resetGame(); // Сброс игры для следующего раза
        wins = 0;
        loses = 0;
    } else if (loses === 3) {
        updateScore();
        displayScene('fight_lose'); // Сцена поражения
        resetGame();
        wins = 0;
        loses = 0;
    }
}

function updateScore() {
    document.getElementById('wins').innerText = `Победы: ${wins}`;
    document.getElementById('loses').innerText = `Поражения: ${loses}`;
}

document.getElementById('stone').onclick = () => fight('Камень');
document.getElementById('paper').onclick = () => fight('Бумага');
document.getElementById('snip').onclick = () => fight('Ножницы');


