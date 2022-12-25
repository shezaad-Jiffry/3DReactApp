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
        <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} py-4 h-screen`}>
                <Hero />
            </div>
        </div>
        <div className={`${styles.flexStart}`}></div>
        <div
            className={`${styles.paddingX} ${styles.flexCenter}`}
        >
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)
export default Home
