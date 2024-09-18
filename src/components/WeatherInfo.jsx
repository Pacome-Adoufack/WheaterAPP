import { WeatherContext } from "../WeatherContext";
import { useContext } from "react";

const WeatherInfo = () => {
  const { weatherData, loading, error, language, isCelsius } = useContext(WeatherContext);

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

  const getWeatherVideoSrc = (description) => {
    if (description.includes("rain")) {
      return "volken.mp4"; 
    } else if (description.includes("clear")) {
      return "sonnenschein.mp4"; 
    } else if (description.includes("cloud")) {
      return "regen.mp4"; 
    } else {
      return "anderewetter.mp4"; 
    }
  };

  const styles = {
    weatherContainer: {
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "20px",
      borderRadius: "15px",
      display: "flex",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    weatherParagraphe: {
      margin: "5px 0",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      color: "#fff",
    },
    error: {
      color: "red",
      fontSize: "1.5rem",
    },
    video: {
      marginTop: "20px",
      width: "300px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  const text = {
    location: {
      en: "Location",
      de: "Ort",
      es: "Ubicación",
      fr: "Emplacement",
    },
    temperature: {
      en: "Temperature",
      de: "Temperatur",
      es: "Temperatura",
      fr: "Température",
    },
   h1:{
      en: "Page not found",
      de: "Seite nicht gefunden",
      es: "Página no encontrada",
      fr: "Page non trouvée",
   },
   WindSpeed : {
      en: "Wind Speed",
      de: "Windgeschwindigkeit",
      es: "Velocidad del viento",
      fr: "Vitesse du vent",
    },
    WindDegree : {
      en: "Wind Degree",
      de: "Windgrad",
      es: "Grado de viento",
      fr: "Degré de vent",
    },
    Humidity : {
      en: "Humidity",
      de: "Luftfeuchtigkeit",
      es: "Humedad",
      fr: "Humidité",
    },
  };

  return (
    <div>
      <div style={styles.weatherInfo}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div>
            <h1 style={styles.error}>{text.h1[language]}</h1>
            <img
              style={{ width: "500px" }}
              src="https://effulgent-brioche-795ac4.netlify.app/static/media/search.154f1af7b63834ca7cfea206d216ebce.svg"
              alt=""
            />
          </div>
        ) : (
          <div style={styles.weatherContainer}>
            <div style={{marginRight: "30px"}}>
              <p style={styles.weatherParagraphe}>
                <i className="fa-solid fa-location-dot"></i>{" "}
                {text.location[language]}: {weatherData.name}
              </p>
              <video
                style={styles.video}
                controls
                autoPlay
                muted
              >
                <source
                  src={getWeatherVideoSrc(weatherData.weather[0].description)}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <p style={styles.weatherParagraphe}>
                <i className="fa-solid fa-temperature-high"></i>{" "}
                {text.temperature[language]}:
                <br />
                {isCelsius ? weatherData.main.temp : (weatherData.main.temp * 9/5) + 32} {isCelsius ? "°C" : "°F"} 
              </p>
              <p style={styles.weatherParagraphe}>
                <i
                  className={getWeatherIconClass(
                    weatherData.weather[0].description
                  )}
                ></i>{" "}
                <br />
                {weatherData.weather[0].description}
              </p>
              <p style={styles.weatherParagraphe}>
                <i className="fa-solid fa-wind"></i> {text.WindSpeed[language]}: <br />
                {weatherData.wind.speed} m/s
              </p>
              <p style={styles.weatherParagraphe}>
                <i className="fa-solid fa-compass"></i> {text.WindDegree[language]}: <br />
                {weatherData.wind.deg}°
              </p>
              <p style={styles.weatherParagraphe}>
                <i className="fa-solid fa-tint"></i> {text.Humidity[language]}: <br />
                {weatherData.main.humidity}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
