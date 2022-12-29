import React from 'react'
import styles from '../style'
import { texts } from '../constants/index'
const LoadingScreen = () => {
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center`}
        >
            loading
        </div>
    )
}
export default LoadingScreen
