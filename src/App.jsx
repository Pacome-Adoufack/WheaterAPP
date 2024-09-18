import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { WeatherContext } from "./WeatherContext";
import Languages from "./components/Languages";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      const apiKey = "c3db5eb8bc5f28ab53106182b9020d06";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=${language}`;
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
  }, [language]);

  const styles = {
    appContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth:"80%",
      marginLeft:"auto",
      marginRight:"auto",
      height:"500px"
    },
    content: {
      textAlign: "center",
      margin: "0 auto",
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
        language,
        setLanguage,
        isCelsius, 
        setIsCelsius
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