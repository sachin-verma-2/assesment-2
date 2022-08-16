import React from "react";
import { useState } from "react";
import './header.css'

const Card=(props)=>
{
    const[data,setdata]=useState(props.value)
    console.log(props.value)

    return(
        
        <div>
        <div className="container">
        <div className="row">
        {
        data.map((items)=>(
            <div className="col-md-4">
            <div className="card cc">
            <img src={items.images} className="card-img-top imgh" alt="..."></img>
            <div className="card-body" class="text-center">
            <h3 className="card-title">{items.name}</h3>
            <h5 className="card-text">Author: {items.author}</h5>
            <h5 className="card-text">Price: {items.price}$</h5>
            <h5 className="card-text">ratings: {items.rating} star</h5>

            <a href={items.link} class="btn btn-primary">Purchase </a>
            </div>
            </div>
            </div>
        ))

        }

    </div>
</div>
</div>
    )

}
export default Card