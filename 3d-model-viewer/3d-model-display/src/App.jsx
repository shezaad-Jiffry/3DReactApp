import React from 'react'
import styles from './style'
import { Navbar } from './components'
import { FaBeer } from 'react-icons/fa';
const App = () =>(
    <div class="bg-gradient-to-r from-rose-300 via-rose-500 to-pink-700">
      <div className={`${styles.paddingX}${styles.flexcenter}`}>
        <div >
          <Navbar/>
          
        </div>
      </div>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        </div>

      </div>
    </div>
  )

export default App
