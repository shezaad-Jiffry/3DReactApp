import React from 'react'
import styles from '../style'
import Contact from './Contact'
const Footer = () => {
    return (
        <section
            className={`${styles.flexCenter} ${styles.paddingY} mx-14 flex md:flex-row flex-column`}
        >
            <div className="text-pink-500 font-poppins font-normal text-[50px]">
                <div className="flex-[1] items-center">
                    <div className="text-pink-900">
                        <Contact/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer
