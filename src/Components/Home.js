import React ,{useEffect,useContext} from 'react'
import home from './Images/home.png'
import { Link } from 'react-router-dom'
import axios from "axios";
import noteContext from '../context/notes/notecontext';
export default function Home() {
  const boom =useContext(noteContext)
    const {host}=boom
  useEffect(() => {
    axios.get(`${host}/`);
  }, [])
  

  return (
    <div style={{"height":"91vh","backgroundImage":`url(${home})`,"backgroundSize": 'cover',
    "backgroundRepeat": 'no-repeat',}} className="d-flex justify-content-center" id="home_full"  >
      <Link id="home_button" to="/signin" className='btn btn-dark white_text' >Login</Link>
    </div>
  ) 
}


