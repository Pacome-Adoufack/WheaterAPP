import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";

const Header = () => {
  const { darkMode, setDarkMode, unit, setUnit } = useContext(WeatherContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: darkMode ? "#333" : "#f5f5f5",
      color: darkMode ? "#fff" : "#000",
      borderRadius: "5px",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      margin: "10px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: darkMode ? "#555" : "#007bff",
      color: "#fff",
    },
    logo: {
      width: "100px",
      height: "auto",
    },
    title: {
      flex: 1,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <img src="wahala.png" alt="Wahala Logo" style={styles.logo} />
      <div style={styles.header}>
        <div style={styles.title}>
          {<i className="fa-solid fa-circle-half-stroke"></i> ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-lightbulb"></i>
          )}
        </div>
        <button onClick={toggleDarkMode} style={styles.button}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <button onClick={toggleUnit} style={styles.button}>
          {unit === "metric" ? "Switch to Fahrenheit" : "Switch to Celsius"}
        </button>
      </div>
    </div>
  );
};

export default Header;
