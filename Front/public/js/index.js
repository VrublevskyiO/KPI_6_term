$(document).ready(function() {
    // Функція для отримання даних погоди з API
    function getWeatherData() {
      var apiKey = '4dde0d5bcafcbd1ff0c55b2deb4921f6';
      var city = 'Київ';
  
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
      $.getJSON(apiUrl, function(data) {
        // Отримуємо дані погоди з API
        var temperature = Math.round(data.main.temp - 273.15); // Конвертуємо температуру з Кельвіна в Цельсій
        var description = data.weather[0].description;
        var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
  
        // Вставляємо дані погоди в HTML
        $('#weather-icon').attr('src', icon);
        $('#temperature').text(temperature + '°C');
        $('#description').text(description);
        $('#humidity').text('Вологість: ' + humidity + '%');
        $('#wind-speed').text('Швидкість вітру: ' + windSpeed + ' м/с');
      });
    }
  
    // Функція для відображення повідомлення про необхідність підключення до API
    function showApiConnectionRequired() {
      var modalTitle = 'API Connection Required';
      var modalMessage = 'Connect to the API to continue.';
  
      // Створюємо модальне вікно з повідомленням
      var modalHtml = `
        <div id="modal" class="modal">
          <div class="modal-content">
            <h3 class="modal-title">${modalTitle}</h3>
            <p class="modal-message">${modalMessage}</p>
          </div>
        </div>
      `;
  
      // Вставляємо модальне вікно в body
      $('body').append(modalHtml);
    }
  
    // Отримуємо дані погоди при завантаженні сторінки
    getWeatherData();
  
    // Оновлюємо дані погоди щогодини
    setInterval(getWeatherData, 3600000);
  
    // Обробник події для посилань на сторінки Bucket_list_page та Deadlines_page
    $('.bucket_list-link, .deadlines-link').on('click', function(event) {
      event.preventDefault();
      showApiConnectionRequired();
    });
  });
  