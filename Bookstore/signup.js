import React from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


 const Signup=()=>
 {
    const [pass,setpass]=useState('')
    const [cpass,setcpass]=useState('')
    const [msg,setmsg]=useState('')
    const navigate=useNavigate()
    const handleChange=(e)=>
    {
        e.preventDefault()
        navigate('/login')
        
    }
    const handleChange1=(e,key)=>
    {
        if(key==='pass')
            setpass(e.target.value)
        if(key==='cpass')
            setcpass(e.target.value)
    }
    const check=(e)=>
    {
        e.preventDefault()
        if(pass!==cpass)
            setmsg('password not matching')

    }
    return(
    <div class="text-center">
        <Header></Header>
        <h2>please sign in to continue</h2>
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Password" onChange={(e)=>handleChange1(e,'pass')}></input>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Confirm Password</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Password again" onChange={(e)=>handleChange1(e,'cpass')} onBlur={(e)=>check(e)} ></input>
    {
        msg!==''?<div><h5>password not matching</h5></div>:<div></div>
    }
  </div>
  <div class="form-group col-md-6">
      <label for="inputZip">mobile No.</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>

  </div>
  <button type="submit" class="btn btn-primary" onClick={(e)=>handleChange(e)}>Sign in</button>
</form>

    </div>)
 }
 export default Signup