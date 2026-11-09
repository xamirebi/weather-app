import axios from "axios";
const GEO_API = "https://geocoding-api.open-meteo.com/v1";
const WEATHER_API = "https://api.open-meteo.com/v1";
export interface GeoCity {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  timezone: string;
  population?: number;
  country_id?: number;
  country: string;
  admin1?: string;
}
interface geoSearchResponse {
  results: GeoCity[];
}
export interface current {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  weather_code: number;
  wind_speed_2m: number;
}
export interface daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number;
}
export interface Tweather {
  latitude: number;
  longitude: number;
  timezone: string;
  current: current;
  daily: daily;
}
class WeatherService {
  async searchCity(query: string): Promise<GeoCity[]> {
    const res = await axios.get<geoSearchResponse>(`${GEO_API}/search`, {
      params: {
        name: query,
        count: 10,
      },
    });
    return res.data.results ?? [];
  }
  async getWeather(lat: number, lon: number): Promise<Tweather> {
    const res = await axios.get<Tweather>(`${WEATHER_API}/forecast`, {
      params: {
        latitude: lat,
        longitude: lon,
        current:
          "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
        daily: "temperature_2m_max,temperature_2m_min,weather_code",
        timezone: "auto",
        forecast_days: 7,
      },
    });
    return res.data;
  }
}
export default new WeatherService();
