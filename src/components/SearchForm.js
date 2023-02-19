import React from 'react'
import { useGlobalContext } from '../context/context'

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <p>Search your favorite movie</p>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}

export default SearchForm
