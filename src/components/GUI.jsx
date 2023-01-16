import React from 'react'
import styles from '../style';
export function Gui(props) {
  function counter(anim){
  }
    const showAlert = () => {
      alert("I'm an alert");
    }
  return(
    <section id = "GUI"
    className={`flex md:flex-row flex-col ${styles.paddingY}  mx-14 `}>
      <div className='font-poppins font-normal text-[20px] py-4 px-4 bg-gray-gradient flex flex-col text-white justify-center rounded-md border-solid border-2 border-black-600'>
        <div className = 'py-4 text-[30px] text-pink-500'>Actions</div>
        <button className = 'py-4'onClick={showAlert}>Show alert</button>
        <button className = 'py-4'onClick={showAlert}>Show alert</button>
          {/*TODO make some styling so that it can show instructions on how to explore the viewport*/}
      </div>
    </section>
  )
}
export default Gui
