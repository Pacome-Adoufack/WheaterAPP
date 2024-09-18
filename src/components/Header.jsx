import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import TemperatureConverter from "./TemperatureConverter";
import Languages from "./Languages";

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
      backgroundColor: darkMode ? "#333" : "#4b71b6",
      color: darkMode ? "#fff" : "#000",
      borderRadius: "10px",
      marginBottom: "-20px",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "80%",
      
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
      marginRight: "20px",
      borderRadius: "10px",
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
        <div style={{display:"flex", position:"relative"}}>
          <Languages />

          <div className="container">
            <label style={{ marginTop: "0px" }} className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
            {darkMode ? (
              <div style={{position:"absolute", right:"35px", top:"30px"}}>
                <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(166, 221, 240)"}}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
              </div>
              
            ) : (
              <div style={{position:"absolute", right:"10px", top:"30px"}}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 253, 112)" }}>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
              </svg>
              </div>
              
            )}
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
