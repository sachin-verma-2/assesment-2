import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";



const Login=()=>
{
    const navigate=useNavigate()
    const [user,setuser]=useState('');
    const [pass,setpass]=useState('')
    const [msg,setmsg]=useState('')
        const handleChange=(e,key)=>
    {
        e.preventDefault()
        if(key==='user')
            setuser(e.target.value)
        else if(key==='pass')
            setpass(e.target.value)
    }


    const handlelogin=(e)=>
    {
        e.preventDefault()
        if(user==='admin' && pass==='admin')
            navigate(`/login/${user}`)
        else
        {
            navigate('/404')
        }
    }
    return(
        <div class="text-center">
            <Header></Header>
            
            <h3>please enter your details to login</h3>
            <form>
                username:<input type="text" onChange={(e)=>handleChange(e,'user')} ></input>
                password:<input type="text" onChange={(e)=>handleChange(e,'pass')}></input>
                <button onClick={(e)=>handlelogin(e)} >login</button>
            </form>
            
        </div>

    )
}
export default Login