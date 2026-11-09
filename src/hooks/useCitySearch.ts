import WeatherService, { type GeoCity } from "../services/weatherService";
import { useState } from "react";
interface City {
  lat: number;
  lon: number;
  name: string;
}
interface useCitySearchResponse {
  city: City | null;
  loading: boolean;
  error: string | null;
  searchCity: (cityName: string) => Promise<GeoCity | null>;
}
function useCitySearch(): useCitySearchResponse {
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const searchCity = async (cityName: string): Promise<GeoCity | null> => {
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
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to search for city";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { city, loading, error, searchCity };
}
export default useCitySearch;
