import { useState, useContext } from "react";
import { WeatherContext } from "../WeatherContext";

const Main = () => {
  const { weatherData, loading, error, setWeatherData, setLoading, setError,language } =
    useContext(WeatherContext);

  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    const apiKey = "c3db5eb8bc5f28ab53106182b9020d06";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const options = {
      method: "GET",
    };

    setLoading(true);
    setError(null);

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

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const getWeatherIconClass = (description) => {
    if (description.includes("rain")) {
      return "fa-solid fa-cloud-rain";
    } else if (description.includes("clear")) {
      return "fa-solid fa-sun";
    } else if (description.includes("cloud")) {
      return "fa-solid fa-cloud";
    } else {
      return "fa-solid fa-smog";
    }
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
    },
    form: {
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      marginRight: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
    },
    weatherInfo: {
      marginTop: "20px",
    },
    weatherContainer: {
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    weatherParagraphe: {
      margin: "5px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  const text = {
    location:{
        en:"Location",
        de:"Ort"
    },
    temperature:{
        en:"Temperature",
        de:"Temperatur"
    }

  }

  return (
    <div style={styles.container}>
        <h3>The Only Weather App You Need !</h3>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
      <div style={styles.weatherInfo}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div>
            <h1>Page not found</h1>
            <img src="https://effulgent-brioche-795ac4.netlify.app/static/media/search.154f1af7b63834ca7cfea206d216ebce.svg" alt="" />
          </div>
         
        ) : (
          <div style={styles.weatherContainer}>
            <p style={styles.weatherParagraphe}>
              <i className="fa-solid fa-location-dot"></i> {text.location[language]}: {weatherData.name}
            </p>
            <p style={styles.weatherParagraphe}>
              <i className="fa-solid fa-temperature-high"></i> {text.temperature[language]}: {weatherData.main.temp}°C
            </p>
            <p style={styles.weatherParagraphe}>
              <i className={getWeatherIconClass(weatherData.weather[0].description)}></i> Weather: {weatherData.weather[0].description}
            </p>
            <p style={styles.weatherParagraphe}>
              <i className="fa-solid fa-wind"></i> Wind Speed: {weatherData.wind.speed} m/s
            </p>
            <p style={styles.weatherParagraphe}>
              <i className="fa-solid fa-compass"></i> Wind Degree: {weatherData.wind.deg}°
            </p>
            <p style={styles.weatherParagraphe}>
              <i className="fa-solid fa-tint"></i> Humidity: {weatherData.main.humidity}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;