import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./component/Home"
import Register from "./component/Register"
import Login from "./component/LogIn"
import Addclient from './component/Addclient';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/addclient' element={<Addclient/>}/>
</Routes>

    </BrowserRouter>
  );
 }

 export default App;


// import LogIn from "./component/LogIn";
// import Addclient from "./component/Addclient";
// import React from 'react'
// //import { json } from "express";

// const App = () => {

  // const handleClient =(cl)=>{
  // fetch("localhost:8000/login" ,{
  //   method:"POST",
  //   headers :{
  //     "Content-Type":"application/json", 
  //   },
  //   body:JSON.stringify(cl),
  // })
  //  .then((response)=> response.json())
  //  .then((data)=> console.log(data))
  //  .catch((err)=>console.log(err)) 
  // }
//   return (
//    <>
//    <LogIn/>
   
//    </>
//   )
// }

// export default App
