import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
  return (
    
    <section className={styles.navigation}>
        <div className={styles.nav__container}>
            <div className={styles.logo}>
            <a href="#!"> Real Estate </a>
            </div>
        </div>

        <nav>
          
          <ul className={styles.nav__list}>
                <li><a href="#!"> BUY </a></li>
                <li><a href="#!"> RENT </a></li>
                <li><a href="#!"> SALE </a></li>
                <li><a href="#!"> ABOUT US </a></li>
                <li><a href="#!"> CONTACT </a></li>
          </ul>
        </nav>
    </section>
  )

  
}

export default NavBar
