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
{title:"Hegel was wrong T-shirt", price:20, id:uniqid(), img:WrongHegel, sign:"$"},
{title:"Hobgoblin T-shirt", price:20, id:uniqid(), img:Hobgoblin, sign:"$"},
{title:"Mad Marx T-shirt", price:20, id:uniqid(), img:MadMarx, sign:"$"},
{title:"Mard Marx T-shirt Black", price:20, id:uniqid(), img:MarxBlack, sign:"$"},
{title:"Life gives you lemons T-shirt", price:20, id:uniqid(), img:MarxLemon, sign:"$"},
{title:"Wittgenstein and Russell-Philosophy Club T-shirt", price:20, id:uniqid(), img:PhiloClub, sign:"$"},
{title:"Radical Freedom T-shirt", price:20, id:uniqid(), img:Freedom, sign:"$"},
{title:"Marx-Revolution T-shirt", price:20, id:uniqid(), img:Revolution, sign:"$"},
{title:"Hegel turned upside down T-shirt", price:20, id:uniqid(), img:UpsideHegel, sign:"$"}
]



export default function Shop() {
    return (
        <Layout>
        <div>
            

        </div>
        </Layout>
    )
}
