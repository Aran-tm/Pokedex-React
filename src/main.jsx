import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutHome from './pages/home/layout/LayoutHome'
import Header from './pages/home/header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <LayoutHome />
    </React.StrictMode>,
)
