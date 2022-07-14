import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles['navbar-title']}>Login React App</span>
      <nav className={styles['navbar-menu']}>
        <Link to="/" className={styles['navbar-item']}>Home</Link>
        <Link to="/login" className={styles['navbar-item']}>Login</Link>
        <Link to="/" className={styles['navbar-item']}>Logout</Link>
      </nav>
    </div>
  )
}

export default Navbar