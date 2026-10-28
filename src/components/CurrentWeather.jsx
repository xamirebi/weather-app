function CurrentWeather({ current, cityName }) {
  if (!current) return null;
  console.log(current);
  return (
    <div className="card shadow p-4 my-5 text-center current-weather">
      <h2 className="mb-3"><i className="bi bi-geo-alt"/> {cityName || "Your location"}</h2>
      <div className="display-1 mb-3">
        {Math.round(current.temperature_2m)}°C
      </div>
      <div className="row g-3">
        <div className="col-sm-4">
          <div className="small">Feels like</div>
          <strong>{Math.round(current.apparent_temperature)}°C</strong>
        </div>
        <div className="col-sm-4">
          <div className="small">Humidity</div>
          <strong>{Math.round(current.relative_humidity_2m)}%</strong>
        </div>
        <div className="col-sm-4">
          <div className="small">Wind Speed</div>
          <strong>{Math.round(current.wind_speed_10m)} Km/h</strong>
        </div>
      </div>
    </div>
  )
}
export default CurrentWeather;