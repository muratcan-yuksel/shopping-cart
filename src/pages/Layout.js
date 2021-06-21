import React from 'react'
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* in order for the content outside of the layour to be seen
                for instance the content in index.js
                I need to do this "children" thing */}
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Murat Can Yüksel</p>
            </footer>
            
        </div>
    )
}
