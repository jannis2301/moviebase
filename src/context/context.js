import React, { useState, useContext } from 'react'
import useFetch from '../hooks/useFetch'

const accessKey = process.env.REACT_APP_MOVIE_API_KEY
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${accessKey}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('the matrix')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
