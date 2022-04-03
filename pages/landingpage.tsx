import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landingpage.module.scss'

const Home: NextPage = () => {
  return (
    
    <section className="navigation">
        <div className="nav-container">
            <div className="logo">
            <a href="#!"> 🏠 Real Estate</a>
            </div>
        </div>

        <nav>
            <div className="nav-list">
                <li><a href="#!"> BUY </a></li>
                <li><a href="#!"> RENT </a></li>
                <li><a href="#!"> SALE </a></li>
                <li><a href="#!"> ABOUT US </a></li>
                <li><a href="#!"> CONTACT </a></li>
            </div>
        </nav>
    </section>
  )
}

export default Home
