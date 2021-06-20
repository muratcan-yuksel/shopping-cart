Routing:
import {Link} from "gatsby"
link to page by => <Link to="/"> => Home page
<Link to="/About"> etc.
------
Creating a layout file (that can repeat components):
I created a components folder in src
Put Navbar.js and Layout.js inside of it
Layout.js is like this:
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

Now I want to use this layout in my index.js in pages folder
It is wrapped like this:
export default function Home() {
  return (
  <Layout>
<div>Hello world!</div>
  </Layout>
  )
}