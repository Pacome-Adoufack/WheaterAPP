import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";

const TemperatureToggle = () => {
  const {isCelsius, setIsCelsius} = useContext(WeatherContext);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    labelText: {
      fontSize: '18px',
      marginRight: '10px',
    },
    switch: {
      position: 'relative',
      display: 'inline-block',
      width: '60px',
      height: '34px',
    },
    switchInput: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    slider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ccc',
      transition: '0.4s',
    },
    sliderBefore: {
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      transition: '0.4s',
      borderRadius: '50%',
    },
    sliderChecked: {
      backgroundColor: '#2196F3',
    },
    sliderCheckedBefore: {
      transform: 'translateX(26px)',
    },
    text: {
      marginTop: '20px',
      fontSize: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.labelText}>
        {isCelsius ? '°C' : '°F'}
      </label>
      <label style={styles.switch}>
        <input
          type="checkbox"
          checked={isCelsius}
          onChange={toggleTemperature}
          style={styles.switchInput}
        />
        <span className="slider"></span>
        </label>
    </div>
  );
};

export default TemperatureToggle;
