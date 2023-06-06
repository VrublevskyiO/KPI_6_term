// Задачі


// Функція для отримання задач за обрану дату
function getTasksByDate(date) {
    return tasks.filter(task => task.date === date);
}

// Функція для відображення задач
function displayTasks(date) {
    var taskList = document.getElementById('task-list-items');
    taskList.innerHTML = '';

    var tasks = getTasksByDate(date);

    if (tasks.length > 0) {
        document.getElementById('task-date').textContent = 'Tasks for ' + date;
        document.getElementById('task-list').style.display = 'block';

        tasks.forEach(task => {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<h4>' + task.title + '</h4><p>' + task.description + '</p>';
            taskList.appendChild(listItem);
        });
    } else {
        document.getElementById('task-list').style.display = 'none';
    }
}

// Обробник події для натискання на день у календарі
function onDayClick(date) {
    displayTasks(date);
}

// Ваша решта коду для створення календаря та обробки подій
// ...

// Отримати посилання на кнопки переключення місяців
var prevMonthBtn = document.getElementById("prev-month-btn");
var nextMonthBtn = document.getElementById("next-month-btn");

// Додати обробники подій для кнопок
prevMonthBtn.addEventListener("click", showPrevMonth);
nextMonthBtn.addEventListener("click", showNextMonth);

// Отримати поточну дату
var currentDate = new Date();
// Отримати номер поточного місяця (0-11)
var currentMonth = currentDate.getMonth();
// Отримати рік
var currentYear = currentDate.getFullYear();

// Функція для генерації днів місяця
function generateCalendar() {
    // Отримати посилання на елементи місяця та року
    var monthYear = document.getElementById("month-year");

    // Встановити текст для елементу місяця та року
    monthYear.textContent = getMonthName(currentMonth) + " " + currentYear;

    // Отримати посилання на елемент tbody таблиці
    var calendarBody = document.getElementById("calendar-body");

    // Очистити таблицю перед генерацією нового місяця
    calendarBody.innerHTML = "";

    // Отримати перший день місяця (0-6, де 0 - неділя)
    var firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Отримати кількість днів у поточному місяці
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Змінні для збереження днів місяця
    var date = 1;
    var row = document.createElement("tr");

    // Додати порожні клітинки до першого дня місяця
    for (var i = 0; i < firstDay; i++) {
        var cell = document.createElement("td");
        row.appendChild(cell);
    }

    // Додати дні місяця до таблиці
    for (var i = 0; i < daysInMonth; i++) {
        var cell = document.createElement("td");
        cell.textContent = date;

        // Підсвітити актуальний день
        if (
            date === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear()
        ) {
            cell.classList.add("current-day");
        }

        // Додати обробник події для кліка по комірці
        cell.addEventListener("click", showTasks);

        row.appendChild(cell);

        // Перейти до нового рядка після суботи (6)
        if (new Date(currentYear, currentMonth, date).getDay() === 6) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }

        date++;
    }

    // Додати останні рядки таблиці
    calendarBody.appendChild(row);
}

// Функція для отримання назви місяця за номером
function getMonthName(month) {
    var monthNames = [
        "Січень", "Лютий", "Березень", "Квітень",
        "Травень", "Червень", "Липень", "Серпень",
        "Вересень", "Жовтень", "Листопад", "Грудень"
    ];
    return monthNames[month];
}

// Функція для показу попереднього місяця
function showPrevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

// Функція для показу наступного місяця
function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

// Функція для показу завдань
function showTasks(event) {
    var clickedDate = event.target.textContent;
    var clickedMonth = currentMonth + 1; // потрібно додати 1, тому що getMonth() повертає значення від 0 до 11
    var clickedYear = currentYear;

    // Додати логіку для відображення завдань на певну дату
    // Наприклад, можна показати модальне вікно зі списком завдань на цю дату
    alert("Tasks for " + clickedDate + "/" + clickedMonth + "/" + clickedYear);
}

// Викликати функцію для генерації календаря
generateCalendar();
