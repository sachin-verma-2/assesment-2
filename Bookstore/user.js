import React from "react";
import { useParams} from "react-router-dom";
import Header from "./header";

const Userpage=()=>
{
    console.log(useParams())
    return(
        <div>
            <Header></Header>
            {/* <h1>Hi {useParams().user} welcome to my bookstore</h1>
            <p>name:{useParams().user}</p>
            <p>address:Noida</p>
            <p>phone:123456</p> */}

<div class="card">
  <div class="card-body md-6">
    <h3 class="card-title">Name:{useParams().user}</h3>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_2x._SY232_CB662999952_.jpg"></img>
    <h5 class="card-text">address: Noida</h5>
    <h5 class="card-text">Phone: 123456</h5>
    <h5>wishlist</h5>
    <h5>Recently purchased items</h5>


  </div>
</div>
        </div>
    )

}
export default Userpage