import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Header } from '../components'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className="loading"></div>
  }
  if (error.show) {
    return (
      <>
        <Header />
        <div className="page-error">
          <h1>{error.msg}</h1>
          <Link to="/" className="btn">
            back to movies
          </Link>
        </div>
      </>
    )
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return (
    <>
      <Header />
      <section className="single-movie">
        <img src={poster} alt={title} />
        <div className="single-movie-info">
          <h2>{title}</h2>
          <p>{plot}</p>
          <h4>{year}</h4>
          <Link to="/" className="btn">
            back to movies
          </Link>
        </div>
      </section>
    </>
  )
}

export default SingleMovie
