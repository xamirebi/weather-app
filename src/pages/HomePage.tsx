import useCitySearch from "../hooks/useCitySearch";
import useWeatherSearch from "../hooks/useWeather";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import ForeCastList from "../components/ForecastList";
function HomePage() {
  const {
    city,
    loading: searchLoading,
    error: searchError,
    searchCity,
  } = useCitySearch();
  const { weather, error: weatherError } = useWeatherSearch(
    city?.lat ?? null,
    city?.lon ?? null,
  );
  return (
    <div className="container my-3">
      {searchError && <div className="alert alert-danger">{searchError}</div>}
      {weatherError && <div className="alert alert-danger">{weatherError}</div>}
      <SearchBar searchCity={searchCity} loading={searchLoading} />
      {!city && (
        <div className="text-center my-5" style={{ color: "antiquewhite" }}>
          <h3>Welcome!</h3>
          <p>Please search for a city</p>
        </div>
      )}
      <CurrentWeather current={weather?.current} cityName={city?.name} />
      <ForeCastList daily={weather?.daily} />
    </div>
  );
}
export default HomePage;
