import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRef } from 'react';
function SearchBar({ searchCity , loading }) {
  const inputRef = useRef(null);
  function handleSubmit (e) {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    searchCity(value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-lg shadow-sm">
        <input className="form-control search-input" 
          disabled={loading} 
          type="text" 
          placeholder='Search for a city...' 
          ref={inputRef}
          autoFocus />
        <button type="submit" 
          className="btn btn-dark btn-lg"
          disabled={loading}>
          {loading ? (<span className='spinner-border spinner-border-sm input-group-text'></span>) : 
          (<i className='bi bi-search'></i>)}
        </button>
      </div>
    </form>
  )
}
export default SearchBar;