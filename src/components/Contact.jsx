import React from 'react'
import styles from '../style'
import { ContactLinks } from '../constants/index'
const Contact = () => {
    return (
        <section
            id="footer"
            className={`flex md:flex-row flex-col ${styles.paddingY}  mx-14 `}>
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:padding-16  px-6 sm:flex hidden`}>
                <div className="text-pink-500 font-poppins font-normal text-[50px]">
                    <ul className="list-none flex justify-end items-center flex-1 flex-col">
                        Contact me!
                        {ContactLinks.map((nav, index) => 
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal curser-pointer text-[20px] text-white`}
                            >
                                <a className="text-[25px] text-pink-500 ">
                                    {nav.id}
                                </a>
                                <a 
                                href= {`${index === ContactLinks.length -1 ? `mailto:${nav.title}` :nav.title }`}>
                                {nav.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="sm:hidden flex flex-1 justify-end  mr-5 menu py-1 w-full">
                <ul className="list-none text-center">
                    Contact me!
                    {ContactLinks.map((nav, index) =>
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal text-[16px] text-white 
                            mb-4 center`}
                        >
                                <a className="text-[25px] text-pink-500 ">
                                    {nav.id}
                                </a>
                                <a 
                                href= {`${index === ContactLinks.length -1 ? `mailto:${nav.title}` :nav.title }`}>
                                {nav.title}
                                </a>
                            
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
export default Contact
