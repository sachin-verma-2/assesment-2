import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'
// import {NavLink} from "react-router-dom"

const Header=()=>{
    return(
        <div className="sticky-top navbar">
            <button class="btn btn-primary"> <NavLink to='/' className="a1">Home</NavLink></button> 
            <button class="btn btn-primary"><NavLink to='/login' className="a1">login</NavLink></button>
            <button class="btn btn-primary"> <NavLink to='/signup' className="a1">Signup</NavLink></button>
            <button class="btn btn-primary"><NavLink to='/sortauthor'className="a1" >sort by author</NavLink></button>
            <button class="btn btn-primary"><NavLink to='/sortprice' className="a1">sort by price</NavLink></button>
            <button class="btn btn-primary"><NavLink to='/sortrating' className="a1">sort by rating</NavLink></button>

            
        </div>

    )
}
export default Header