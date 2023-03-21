
import React from 'react'

import { Link ,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {  toast } from 'react-toastify'

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    const notifyA = (message) => toast.error(message);
  const notifyB = (message) => toast.success(message)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const postData = ()=>{
        //email checking
        if(!emailRegex.test(email)){
             notifyA("invalid Email")
             return 
        }
        
        
           fetch("http://localhost:8000/login",{
            method :"POST", 
             headers :{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
              
            
              email:email,
              password:password
        
             })
        
           }).then(res=>res.json())
           .then(data=>{
            if(data.error){
            notifyA(data.error)
        
            }
            else{
              notifyB(data.message)
              navigate("/")
            }
            console.log(data)})
             }
          
            

  return (
    <div className='signin'>
    <div>
        <div className='loginform'>
            
            <div>
                <input type="email" name ="email" id ="email" value = {email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password" name ="password" id ="password" value = {password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit"  id ="submit-btn" value ="login" onClick={()=>{postData()}} />
            </div>
            <div className='loginform2'>
                Don't have an account ?
             <Link to ="/register"><span style={{colour:"blue", cursor :"pointer"}}>Sign Up</span></Link>
            </div>
        </div>

    </div>
      
    </div>
  )
}

