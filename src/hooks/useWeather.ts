import WeatherService, { type Tweather } from "../services/weatherService";
import { useState, useEffect } from "react";
interface UseWeatherSearchResponse {
  weather: Tweather | null;
  loading: boolean;
  error: string | null;
}
function useWeatherSearch(
  lat: number | null,
  lon: number | null,
): UseWeatherSearchResponse {
  const [weather, setWeather] = useState<Tweather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (lat == null || lon == null) return;
    let isMounted = true;
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const res = await WeatherService.getWeather(lat, lon);
        if (isMounted) {
          setWeather(res);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          const message =
            err instanceof Error ? err.message : "Failed to search for weather";
          setError(message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchWeather();
    return () => {
      isMounted = false;
    };
  }, [lat, lon]);
  return { weather, loading, error };
}
export default useWeatherSearch;
