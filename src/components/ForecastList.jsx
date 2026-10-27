import dayjs from "dayjs";
function ForeCastList({ daily }) {
  if (!daily) return null;
  console.log(daily);
  const days = daily.time.map((date, i) => ({
    date,
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
    code: daily.weather_code[i],
  }));
  return (
    <div className="row g-3 mt-4">
      {days.map((day) => {
        return (
          <div key={day.date} className="col-6 col-md-4 col-lg-3">
            <div className="card text-center p-3 h-100">
              <div className="fw-bold mb-2">
                {dayjs(day.date).format("ddd - D")}
              </div>
              <div className="mt-2">
                <strong>↑ {Math.round(day.max)}°</strong>
                <span className="text-muted ms-2">{Math.round(day.min)}° ↓</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ForeCastList;
