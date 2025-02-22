import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export default function WeatherApp() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      try {
        const response = await fetch(
          `${API_URL}?q=${input}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          setError(null);
        } else {
          setError(data.message);
          setWeatherData(null);
        }
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Failed to fetch weather data");
        setWeatherData(null);
      }
    }
  };

  const getBackground = () => {
    if (!weatherData) return "bg-gradient-to-r from-blue-500 to-purple-600";
    return weatherData.main.temp < 20
      ? "bg-gradient-to-r from-blue-700 to-blue-400"
      : "bg-gradient-to-r from-orange-500 to-yellow-300";
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${getBackground()} p-6`}
    >
      <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={search}
          className="w-full p-3 text-lg border border-white rounded-lg outline-none bg-transparent text-white placeholder-white"
        />
        {error && <p className="text-red-300 mt-2">{error}</p>}

        {weatherData && (
          <div className="mt-6 text-white">
            <h2 className="text-2xl font-semibold">
              {weatherData.name}, {weatherData.sys?.country}
            </h2>
            <div className="text-xl">{weatherData.weather[0].main}</div>
            <h1 className="text-5xl font-bold mt-2">
              {Math.round(weatherData.main.temp)}°C
            </h1>
            <h3 className="mt-2 text-lg">
              Humidity: {weatherData.main.humidity}%
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
