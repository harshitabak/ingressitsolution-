import React from 'react'
import { useState } from 'react'


import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setPassword] = useState("");

  // toast function
  const notifyA = (message) => toast.error(message);
  const notifyB = (message) => toast.success(message)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  // sending data to server
  const postData = () => {
    //email checking
    if (!emailRegex.test(email)) {
      notifyA("invalid Email")
      return
    }
    else if (!passRegex.test(password)) {
      notifyA("invalid password")
      return
    }
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        password: password

      })

    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)

        }
        else {
          notifyB(data.message)
          navigate("/login")
        }
        console.log(data)
      })
  }
  return (


    <div className='signup'>
      <div className='form-container' >
        <div className='form'>

          <div>
            <input type="email" name="email" id="email" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input type="text" name="name" id="name" value={name} placeholder='Full Name' onChange={((e) => { setName(e.target.value) })} />
          </div>
          <div>
            <input type="text" name="username" id="username" value={lastname} placeholder='UserName' onChange={(e) => { setlastname(e.target.value) }} />
          </div>
          <div>
            <input type="password" name="password" id="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <input type="submit" id="submit-btn" value="register" onClick={() => { postData() }} />
        </div>
        <div className='form-2'>
          Already have an account ?
          <Link to="/login"><span style={{ color: 'blue', cursor: "pointer" }}>signIn</span></Link>
        </div>
      </div>
    </div>

  )
}
