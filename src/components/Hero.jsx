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
                className={`flex-1 ${styles.flexStart} xl:px-0 sm:padding-16  px-6 bg-gray-gradient rounded-[30px]`}
            >
                <div className="text-pink-500 font-poppins font-normal text-[50px]">
                    <ul className="list-none flex justify-end items-center flex-1 flex-col tracking-wide leading-loose py-14 px-14">
                        About
                        {texts.map(id => 
                            <li className="text-[20px] text-white px-6 " key = {id}>
                                {id.text}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero
