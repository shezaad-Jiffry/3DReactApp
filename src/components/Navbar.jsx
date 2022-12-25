import { useState } from 'react'
import { navLinks } from '../constants/index'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GiOverdrive } from 'react-icons/gi'
const Navbar = () => {
    //tailwind takes care of formatting, w-full is ull width, justify is space btwn , py-6 is height, etc
    const [toggle, setToggle] = useState(false) //setting listener for toggle
    return (
        <nav className="navbar w-full flex-1 py-2 justify-between items-center ">
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
                <div className="text-pink-900 mr-2">
                    <GiOverdrive size={80} />
                </div>
                <div className="font-poppins font-normal text-[30px] justify-end flex-1 font-bold font text-pink-800">
                    Shezaads 3D Models
                </div>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal curser-pointer text-[16px] text-white 
                    ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <a
                            href={`${
                                index === navLinks.length - 2
                                    ? `#${nav.id}`
                                    : nav.id
                            }`}
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center mr-5 menu py-1 w-full">
                <div className="text-pink-900 mr-2">
                    <GiOverdrive size={80} />
                </div>
                <div className="font-poppins font-normal text-[30px] justify-end flex-1 font-bold font text-pink-800">
                    Shezaads 3D Models
                </div>
                <div className="mr-8 text-white">
                    {toggle ? (
                        <AiOutlineClose
                            size={30}
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    ) : (
                        <AiOutlineMenu
                            size={30}
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    )}
                </div>
                <div
                    className={`${
                        toggle ? 'flex' : 'hidden'
                    } p-6 bg-gray-gradient absolute top-20 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-center flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal curser-pointer text-[16px] text-white 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                            >
                                <a
                                    href={`${
                                        index === navLinks.length - 1
                                            ? nav.id
                                            : `#${nav.id}`
                                    }`}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
