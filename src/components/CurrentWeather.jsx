function CurrentWeather({ current, cityName }) {
  if (!current) return null;
  console.log(current);
  return (
    <div className="card shadow-sm p-4 mt-4 text-center">
      <h2 className="mb-3">{cityName || "Your location"}: {current.time}</h2>
      <div className="display-1 mb-3">
        {Math.round(current.temperature_2m)}°C
      </div>
      <div className="row g-3">
        <div className="col-sm-4">
          <div className="text-muted small">Feels like</div>
          <strong>{Math.round(current.apparent_temperature)}°C</strong>
        </div>
        <div className="col-sm-4">
          <div className="text-muted small">Humidity</div>
          <strong>{Math.round(current.relative_humidity_2m)}%</strong>
        </div>
        <div className="col-sm-4">
          <div className="text-muted small">Wind Speed</div>
          <strong>{Math.round(current.wind_speed_10m)} Km/h</strong>
        </div>
      </div>
    </div>
  )
}
export default CurrentWeather;