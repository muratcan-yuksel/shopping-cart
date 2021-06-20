import React from 'react'
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* content goes here */}
            </div>
            <footer>
                <p>Copyright 2021 Murat Can Yüksel</p>
            </footer>
            
        </div>
    )
}
