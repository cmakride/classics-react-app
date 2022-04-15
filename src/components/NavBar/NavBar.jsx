import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Welcome, {user.name}</li>
            <li><Link to="/classics/new">Create Classic</Link></li>
            <li><Link to="/classics">Classics</Link></li>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
