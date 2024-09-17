import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import TemperatureConverter from "./TemperatureConverter";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(WeatherContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
      width: "200px",
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
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <div className="container">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div>
          <TemperatureConverter />
        </div>
      </div>
    </div>
  );
};

export default Header;
