import { useState, useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import WeatherInfo from "./WeatherInfo";

const Main = () => {
  const { setWeatherData, setLoading, setError,darkMode  } = useContext(WeatherContext);

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

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: darkMode ? "#333" : "#4b71b6",
      color: darkMode ? "#fff" : "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom:"-600px"
      
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "18px",
      marginRight: "10px",
      borderRadius: "30px",
      border: "1px solid #007bff",
      outline: "none",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 30px",
      fontSize: "18px",
      cursor: "pointer",
      borderRadius: "30px",
      border: "none",
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>The Only Weather App You Need!</h3>
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
      <WeatherInfo />
    </div>
  );
};

export default Main;
