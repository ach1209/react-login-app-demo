import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles['navbar-title']}>Login React App</span>
      <ul className={styles['navbar-links']}>
        <li className={styles['navbar-item']}>
          <a href="/">Home</a>
        </li>
        <li className={styles['navbar-item']}>
          <a href="/">Login</a>
        </li>
        <li className={styles['navbar-item']}>
          <a href="/">Logout</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar