import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const auth = getAuth()

  function logoutOfAccount() {
    auth.signOut()
    setIsLoggedIn(false)
  }

  return (
    <div className={styles.navbar}>
      <span className={styles['navbar-title']}>Login React App</span>
      <nav className={styles['navbar-menu']}>
        <Link to="/" className={styles['navbar-item']}>Home</Link>
        { !isLoggedIn && <Link to="/login" className={styles['navbar-item']}>Login</Link> }
        { isLoggedIn && 
          <span 
            className={styles['navbar-item']} role="button"
            onClick={logoutOfAccount}
          >Logout</span>
        }
      </nav>
    </div>
  )
}

export default Navbar