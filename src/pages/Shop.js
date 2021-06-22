import React from 'react'
import Layout from "./Layout"
import uniqid from "uniqid";
import WrongHegel from "../images/hegel-was-wrong.png"
import Anarchism from "../images/anarchism.png"
import Hobgoblin from "../images/hobgoblin.png"
import MadMarx from "../images/mad-marx.png"
import MarxBlack from "../images/mad-marx-black.png"
import MarxLemon from "../images/marx-lemon.png"
import PhiloClub from "../images/philo-club.png"
import Freedom from "../images/radical-freedom.png"
import Revolution from "../images/revolution.png"
import UpsideHegel from "../images/upside-hegel.png"

const Cards= (props)=>[
{title:"Anarchism T-shirt", price:20, id:uniqid(), img:Anarchism, sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"},
{title:"", price:"", id:"", img:"", sign:"$"}
]



export default function Shop() {
    return (
        <Layout>
        <div>
            <p>Cards[0].price</p>

        </div>
        </Layout>
    )
}
