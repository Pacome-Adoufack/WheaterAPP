import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const Languages = () => {
  const { language, setLanguage } = useContext(WeatherContext);

  const styles = {
    select: {
      padding: "10px",
      fontSize: "16px",
      marginTop: "20px",
      cursor: "pointer",
      borderRadius: "50px",
      border: "1px solid #ccc",
      marginRight: "40px",
    },
  };

  return (
    <div>
      <select
        style={styles.select}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="fr">🇫🇷 French</option>
        <option value="de">🇩🇪 German</option>
      </select>
    </div>
  );
};

export default Languages;