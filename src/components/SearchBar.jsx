import { useRef } from 'react';
function SearchBar({ searchCity , loading }) {
  const inputRef = useRef(null);
  function handleSubmit (e) {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) {
    return;
    }
    searchCity(value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-lg my-5">
        <input className="form-control search-bar rounded-pill" 
          disabled={loading} 
          type="text" 
          placeholder='Search' 
          ref={inputRef}
          required
          />
        <button type="submit" 
          className="btn btn-dark btn-lg rounded-pill search-button"
          disabled={loading}>
          {loading ? (<span className='spinner-border spinner-border-sm'></span>) : 
          (<i className='bi bi-search'></i>)}
        </button>
      </div>
    </form>
  )
}
export default SearchBar;