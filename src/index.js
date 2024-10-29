import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GamorContextProvier } from './context/GamorContext'
import { Landingpage } from './pages/Landingpage'
import { Loggingpage } from './pages/Logginpage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <GamorContextProvier>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Loggingpage/>}></Route>
                <Route path='/landing' element={<Landingpage/>}></Route>
            </Routes>
        </BrowserRouter>
    </GamorContextProvier>
)
