import React from 'react'
import styles from '../style'
import { Navbar, Hero, Footer } from '../components/index'
import { Link } from 'react-router-dom'
const Home = () => (
    <div className="bg-black-gradient w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-black-gradient ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
        <div className={`${styles.flexStart}`}></div>
        <div
            className={`bg-black-gradient ${styles.paddingX} ${styles.flexCenter}`}
        >
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
        <ul>
            <li>
                {/* Endpoint to route to Home component */}
                <Link to="/"/>
            </li>
        </ul>
    </div>
)

export default Home
