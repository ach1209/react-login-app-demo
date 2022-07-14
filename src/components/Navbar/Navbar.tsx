import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className={styles.navbar}>
      <span className={styles['navbar-title']}>Login React App</span>
      <nav className={styles['navbar-menu']}>
        <Link to="/" className={styles['navbar-item']}>Home</Link>
        { !isLoggedIn && <Link to="/login" className={styles['navbar-item']}>Login</Link> }
        { isLoggedIn && <Link to="/" className={styles['navbar-item']}>Logout</Link> }
      </nav>
    </div>
  )
}

export default Navbar