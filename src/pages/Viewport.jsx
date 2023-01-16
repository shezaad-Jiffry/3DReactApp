import React from 'react'
import styles from '../style'
import { Navbar, Footer, ModelViewer, Hero } from '../components/index'
import { Link } from 'react-router-dom'
import Gui from '../components/GUI'

const ViewPort = () => (
    <div className="bg-black-gradient w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}  `}>
            <Gui />
            <div
                className={`border-8 border-pink-500  bg-gradient-to-r from-rose-400 h-screen w-screen text-center`}
            >
                <ModelViewer />
            </div>
        </div>
        <div className={`${styles.flexStart}`}></div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)
export default ViewPort
