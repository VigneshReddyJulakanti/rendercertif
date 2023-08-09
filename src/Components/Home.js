import React ,{useEffect,useContext} from 'react'
import home from './Images/home.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import noteContext from '../context/notes/notecontext';
export default function Home() {
  const navigate = useNavigate()
  const boom =useContext(noteContext)
    const {host}=boom


  useEffect(() => {

    if(localStorage.getItem("authtoken")!=null){
      navigate("/certificates_templates")
     }


     fetch(`${host}/`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
       
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
    //  body: JSON.stringify({"email":credentials.email,"password":credentials.password})
    });

    // console.log(response)
    // console.log("sending request")
    // let res=await response.json();
    // axios.get(`${host}/`);
  }, [])
  

  return (
    <div style={{"height":"91vh","backgroundImage":`url(${home})`,"backgroundSize": 'cover',
    "backgroundRepeat": 'no-repeat',}} className="d-flex justify-content-center" id="home_full"  >
      <Link id="home_button" to="/signin" className='btn btn-dark white_text' >Login</Link>
    </div>
  ) 
}


