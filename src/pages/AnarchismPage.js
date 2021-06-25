import React from 'react'
import Anarchism from "../images/anarchism.png"


export default function AnarchismPage() {
const anarchism={title:"Anarchism T-shirt", price:20, img:Anarchism, sign:"$"}




    return (
        <div 
        className=" col-4  text-center" style={{width:"15em"}}
        >
      <div className="card h-100 mx-auto w-100 ">          
          <img      
         src={anarchism.img}
        className="card-img-top h-100 "
            alt={anarchism.title}
          ></img>      
          <div className="card-body">
            <p className="card-text">{anarchism.title}</p>
            <p className="card-text">{anarchism.sign} {anarchism.price}</p>
          </div>
        </div>
        </div>
    )
}
