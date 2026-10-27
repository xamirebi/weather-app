import axios from 'axios';
const GEO_API = 'https://geocoding-api.open-meteo.com/v1'
const WEATHER_API = 'https://api.open-meteo.com/v1'
class WeatherService {
  async searchCity(query) {
    const res = await axios.get(`${GEO_API}/search`,{
      params: {
        name: query,
        count: 10,
      }
    });
    return res.data.results || [];
  }
  async getWeather(lat, lon) {
    const res = await axios.get(`${WEATHER_API}/forecast`, {
      params: {
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
        daily: 'temperature_2m_max,temperature_2m_min,weather_code',
        timezone: 'auto',
        forecast_days: 7
      }
    });
    return res.data;
  }
};
export default new WeatherService();