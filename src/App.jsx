import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewPort from './pages/Viewport'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/viewport" element={<ViewPort />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
