import weatherService from "../services/weatherService.js";
import { useState, useEffect } from "react";
function useWeatherSearch(lat, lon) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!lat || !lon) return;
    let isMounted = true;
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const res = await weatherService.getWeather(lat, lon);
        if (isMounted) {
          if (res) {
            setWeather(res);
            setError(null);
          } else {
              setError('Weather wasn\'t found. ');
              return
          }
        }
      } catch (error) {
          if (isMounted) {
            setError(error.message || 'Failed to get the weather. ');
          }
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
    return () => { isMounted = false };
  }, [lat, lon]);
  return { weather, loading, error }
}
export default useWeatherSearch;