import {useState} from 'react'
import { navLinks } from '../constants/index'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {GiOverdrive} from 'react-icons/gi'
const Navbar = () => {
//tailwind takes care of formatting, w-full is ull width, justify is space btwn , py-6 is height, etc
const [toggle, setToggle] = useState(false);//setting listener for toggle
return (
    <nav className='w-full flex-1 py-2 justify-between items-center navbar'>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 mx-48'>
            <div class='text-pink-900 mr-2'>
                <GiOverdrive size = {80}/> 
            </div>
            <div class='font-poppins font-normal text-[30px] justify-end flex-1 font-bold font text-pink-800'>
            Shezaads 3D Models
            </div>
            {navLinks.map((nav,index)=>
                <li
                    key ={nav.id}
                    className = {`font-poppins font-normal curser-pointer text-[16px] 
                    ${index === navLinks.length -1 ? 'mr-0': 'mr-10'}`}
                >
                    <a href = {`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            )}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center mr-5 menu'>
            <div>
                {toggle ? <AiOutlineClose size={30} onClick={() => setToggle((prev) => !prev)}/> : 
                <AiOutlineMenu size={30} onClick={() => setToggle((prev) => !prev)}/>}
            </div>
            <div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
