import useCitySearch from "../hooks/useCitySearch.js";
import useWeatherSearch from "../hooks/useWeather.js";
import SearchBar from "../components/SearchBar.jsx";
import CurrentWeather from "../components/CurrentWeather.jsx";
import ForeCastList from "../components/ForecastList.jsx";
function HomePage() {
  const { city, loading: searchLoading, error: searchError, searchCity } = useCitySearch();
  const { weather, loading: weatherLoading, error: weatherError} = useWeatherSearch(city?.lat, city?.lon);
  return (
    <div className="container my-3">
      {searchError && <div className="alert alert-danger">{searchError}</div>}
      {weatherError && <div className="alert alert-danger">{searchError}</div>}
      <SearchBar searchCity={searchCity} loading={searchLoading}/>
      <CurrentWeather current={weather?.current} cityName={city?.name}/>
      <ForeCastList daily={weather?.daily} />
    </div>
  )
}
export default HomePage;