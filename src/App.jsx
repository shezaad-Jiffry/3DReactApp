import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ModelViewer from './components/ModelViewer'
import Home from './pages/Home'

function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/#Model" element={<ModelViewer />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
