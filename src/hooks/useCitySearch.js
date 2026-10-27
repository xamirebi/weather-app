import WeatherService from "../services/weatherService.js";
import { useState } from "react";
function useCitySearch() {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchCity = async (cityName) => {
    try {
      setLoading(true);
      const res = await WeatherService.searchCity(cityName);
      if (!res || res.length === 0) {
        throw new Error("City not found. ");
      }
      const cityData = res[0];
      setCity({
        lat: cityData.latitude,
        lon: cityData.longitude,
        name: cityData.name,
      });
      setError(null);
      return cityData;
    } catch (error) {
      setError(error.message || "Failed to search for city. ");
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { city, loading, error, searchCity };
}
export default useCitySearch;
