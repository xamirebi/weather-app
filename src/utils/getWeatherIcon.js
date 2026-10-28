import clear from '../assets/icons/clear-day.svg'
import cloudy from '../assets/icons/cloudy.svg'
import foggy from '../assets/icons/fog.svg'
import rain from '../assets/icons/rain.svg'
import snow from '../assets/icons/snow.svg'
import light_drizzle from '../assets/icons/mostly-clear-day-drizzle.svg'
import moderate_drizzle from '../assets/icons/partly-cloudy-day-drizzle.svg'
import drizzle from '../assets/icons/drizzle.svg'
import heavy_snow from '../assets/icons/snowflake.svg'
import partly_cloudy from '../assets/icons/partly-cloudy-day.svg'
import thunderstorm from '../assets/icons/thunderstorms-rain.svg'
import slightly_rain from '../assets/icons/mostly-clear-day-rain.svg'
const icons = {
  0: clear,
  1: clear,
  2: partly_cloudy,
  3: cloudy,
  45: foggy,
  48: foggy,
  51: light_drizzle,
  53: moderate_drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,
  61: slightly_rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  71: snow,
  73: snow,
  75: heavy_snow,
  77: heavy_snow,
  80: rain,
  81: rain,
  82: rain,
  85: heavy_snow,
  86: heavy_snow,
  95: thunderstorm, 
  96: thunderstorm,
  97: thunderstorm,
  99: thunderstorm
};
export function getWeatherIcon(code) {
  return icons[code] || "?";
}