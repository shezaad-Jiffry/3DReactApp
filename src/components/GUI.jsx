import React from 'react'
import styles from '../style'
export function Gui({animList}) {
    console.log(animList + "lets see");
    return (
        <div
            id="GUI"
            className=" text-center font-poppins font-normal text-[20px] py-4 px-4 bg-gray-gradient flex flex-col text-white rounded-md border-solid border-2 border-black-600 w-60 h-screen"
            >
            <div className=" py-4 text-[30px] text-pink-500 underline">
                Actions
            </div>
            <div className="py-4 " >
                Show alert
            </div>

            {/*TODO make some styling so that it can show instructions on how to explore the viewport*/}
        </div>
    )
}
export default Gui
