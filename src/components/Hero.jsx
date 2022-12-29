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
                        {texts.map((id) => (
                            <li
                                className="text-[20px] text-white px-6 py-4 "
                                key={id}
                            >
                                {id.text}
                            </li>
                        ))}
                        <div
                            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 
                        rounded-[30px] outline hover:outline-dashed cursor-pointer"
                        >
                            <a
                                href="/viewport"
                                className=" text-white mx-24 my-4"
                            >
                                View models here!
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero
