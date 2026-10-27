import useCitySearch from "../hooks/useCitySearch.js";
import useWeatherSearch from "../hooks/useWeather.js";
import SearchBar from "../components/SearchBar.jsx";
import CurrentWeather from "../components/CurrentWeather.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomePage() {
  const { city, loading: searchLoading, error: searchError, searchCity } = useCitySearch();
  const { weather, loading: weatherLoading, error: weatherError} = useWeatherSearch(city?.lat, city?.lon);
  return (
    <div className="container my-3">
      {searchError && <p>{searchError}</p>}
      {weatherError && <p>{weatherError}</p>}
      {(searchLoading || weatherLoading) && <p>Loading...</p>}
      <SearchBar searchCity={searchCity} loading={searchLoading}/>
      <CurrentWeather weather={weather} city={city}/>
    </div>
  )
}
export default HomePage;