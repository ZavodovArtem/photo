import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

const apiKey = '33012187532488844ef3d6b2dc199e30'; // Замените YOUR_API_KEY на ваш API ключ

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Функция для получения данных о погоде
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    // <Container>
    <>
      <h1>Приложение погоды</h1>
      <input
        type="text"
        placeholder="Введите название города"
        value={city}
        onChange= {handleCityChange}
      />
      <button onChange={handleCityChange}/>
      {loading ? (
        <>Загрузка...</>
      ) : (
        // <WeatherInfo>
        <>
          <h2>Погода в {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Температура: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Влажность: {weatherData.main.humidity}%</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        {/* </WeatherInfo> */}
        </>
      )}
      <p>Пример: <br/>
      Лондон
      </p>
      </>

    // </Container>
  );
};

// const Container = styled.div`
//   text-align: center;
// `;

// const Loading = styled.p`
//   font-size: 18px;
//   margin-top: 20px;
// `;

// const WeatherInfo = styled.div`
//   margin-top: 20px;
//   font-size: 18px;
// `;

export default WeatherApp;