import { Link } from 'react-router-dom'
import { Header } from '../components'

const Error = () => {
  return (
    <>
      <Header />
      <div className="error-page">
        <h2>Oops, this page doesn't exist! 😿 </h2>
        <Link to="/" className="btn">
          return to Moviebase
        </Link>
      </div>
    </>
  )
}
export default Error
