import React from 'react'
import styles from '../style'
import { Navbar, Footer, ModelViewer, Hero } from '../components/index'
import { Link } from 'react-router-dom'

const ViewPort = () => (
    <div className="bg-black-gradient w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} py-4 h-screen`}>
                <ModelViewer />
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
export default ViewPort
