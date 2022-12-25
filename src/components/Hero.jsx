import React from 'react'
import styles from '../style'
import { texts } from '../constants/index'
const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}  mx-14`}
        >
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:padding-16  px-6 bg-discount-gradient rounded-[30px]`}
            >
                <div className="text-pink-500 font-poppins font-normal text-[50px]">
                    <ul className="list-none flex justify-end items-center flex-1 flex-col tracking-wide leading-loose">
                        About
                        {texts.map((id) => (
                            <a className="text-[20px] text-white px-6 py-6">
                                {id.text}
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero
