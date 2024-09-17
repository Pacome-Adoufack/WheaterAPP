import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { WeatherContext } from "./WeatherContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      const apiKey = "c3db5eb8bc5f28ab53106182b9020d06";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  const styles = {
    appContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: darkMode ? "black" : "white",
    },
    content: {
      textAlign: "center",
    },
  };

  return (
    <WeatherContext.Provider
      value={{
        darkMode,
        setDarkMode,
        weatherData,
        setWeatherData,
        loading,
        setLoading,
        error,
        setError,
      }}>
      <div style={styles.appContainer}>
        <div style={styles.content}>
          <Header />
          <Main />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;