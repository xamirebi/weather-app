import { useRef } from "react";
import type { GeoCity } from "../services/weatherService";
interface SearchBarProps {
  searchCity: (query: string) => Promise<GeoCity | null>;
  loading: boolean;
}
function SearchBar({ searchCity, loading }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = inputRef.current;
    if (!input) return;
    const value = input.value.trim();
    if (!value) return;
    searchCity(value);
    input.value = "";
    input.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-lg my-5">
        <input
          className="form-control search-bar rounded-pill"
          disabled={loading}
          type="text"
          placeholder="Search"
          ref={inputRef}
          required
        />
        <button
          type="submit"
          className="btn btn-dark btn-lg rounded-pill search-button"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            <i className="bi bi-search"></i>
          )}
        </button>
      </div>
    </form>
  );
}
export default SearchBar;
