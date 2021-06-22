import React from "react"
import Layout from "./Layout"
import {indexContainer} from "../styles/layout.module.css"

export default function Home() {
  return (
  <Layout>
<div className={indexContainer}>
{/* <div>Hello world bruh</div> */}

<img src="/welcome.jpg" style={{maxWidth:"100%"}, {maxHeight:"50vh"}} />


</div>
  </Layout>
  )
}
