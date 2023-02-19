import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h2 className="logo">MovieBase</h2>
        </Link>
      </nav>
    </header>
  )
}
export default Header
