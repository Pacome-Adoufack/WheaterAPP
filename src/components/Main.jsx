import { useState, useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import WeatherInfo from "./WeatherInfo";

const Main = () => {
  const { setWeatherData, setLoading, setError, darkMode, language } = useContext(WeatherContext);

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
      marginBottom: "-600px",
      borderRadius: "10px",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#acbec0",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      height: "48px",
    },
    input: {
      padding: "10px",
      fontSize: "18px",
      borderRadius: "30px 0 0 30px",
      border: "1px solid #007bff",
      outline: "none",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginRight: "-1px", 
    },
    button: {
      padding: "10px 30px",
      fontSize: "18px",
      cursor: "pointer",
      borderRadius: "0 30px 30px 0", 
      border: "1px solid #007bff",
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
      height: "48px", 
      marginTop:"0px"
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  const text = {
    h3: {
      en: "The Only Weather App You Need!",
      de: "Die einzige Wetter-App, die Sie benötigen!",
      es: "¡La única aplicación meteorológica que necesitas!",
      fr: "La seule application météo dont vous avez besoin!",
    },
    placeholder: {
      en: "Enter city",
      de: "Stadt eingeben",
      es: "Introduce la ciudad",
      fr: "Entrez la ville",
    },
    button: {
      en: "Search",
      de: "Suche",
      es: "Buscar",
      fr: "Chercher",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>{text.h3[language]}</h3>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={text.placeholder[language]}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {text.button[language]}
        </button>
      </form>
      <WeatherInfo />
    </div>
  );
};

export default Main;