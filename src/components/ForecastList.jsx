import dayjs from "dayjs";
import { getWeatherIcon } from "../utils/getWeatherIcon";
function ForeCastList({ daily }) {
  if (!daily) return null;
  const days = daily.time.map((date, i) => ({
    date,
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
    code: daily.weather_code[i],
  }));
  return (
    <div className="row g-5 my-5">
      {days.slice(1).map((day) => {
        return (
          <div key={day.date} className="col-6 col-md-4 col-lg-2">
            <div className="card text-center p-3 shadow h-100 forecast-cards">
              <div className="fw-bold mb-2">
                {dayjs(day.date).format("ddd - D")}
              </div>
              <div className="mt-2">
                <strong>↑ {Math.round(day.max)}° </strong>
                <span className="ms-2">{Math.round(day.min)}° ↓</span>
              </div>
              <div className="display-4 mt-1">
                <img src={getWeatherIcon(day.code)} width="75" alt="weather" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ForeCastList;
