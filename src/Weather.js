import React, { useState } from 'react';

function WeatherApхp() {
  // Состояние для хранения названия города и данных о погоде
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Функция для загрузки данных о погоде при нажатии кнопки
  const fetchWeatherData = () => {
    // Здесь вы можете использовать API для получения данных о погоде
    // Вместо этого используйте реальный API ключ и URL
    const apiKey = '33012187532488844ef3d6b2dc199e30';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Здесь вы можете использовать fetch или другой метод для получения данных
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Обновляем состояние с данными о погоде
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных о погоде:', error);
      });
  };

  return (
    <div>
      <h1>Приложение Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Введите название города"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Получить погоду</button>
      </div>
      {weatherData && (
        <div>
          <h2>Погода в {weatherData.name}</h2>
          <p>Температура: {weatherData.main.temp}°C</p>
          <p>Влажность: {weatherData.main.humidity}%</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApхp;