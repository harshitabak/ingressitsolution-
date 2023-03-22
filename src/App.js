
import './App.css';
import Header from './component/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./component/Home"
import Register from "./component/Register"
import Login from "./component/LogIn"
import Addclient from './component/Addclient';
//import { ToastContainer } from 'react-toastify';


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

