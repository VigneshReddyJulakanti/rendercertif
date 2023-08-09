import React,{useState,useEffect,useContext} from 'react'
import axios from "axios";
import Img_plate from './Img_plate';
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/notecontext';
export default function Your_Certificates() {
    // let host="http://localhost:5000";

    const boom =useContext(noteContext)
    const {host}=boom

    const navigate = useNavigate()
  useEffect(() => {
 if(localStorage.getItem("authtoken")==null){
  navigate("/signin")
 }
  }, [])


    const [fetched_certi, setfetched_certi] = useState([])
const getcertuseEf=async()=>{
  const response = await fetch(`${host}/user/getcertis`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // cors, *no-cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
     
    },
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   // body data type must match "Content-Type" header
   body: JSON.stringify( {username:localStorage.getItem("username")})
  });

  // console.log(response)
  // console.log("sending request")
  let res=await response.json();
  setfetched_certi(res)
}
useEffect(() => {

    // axios.post(`${host}/user/getcertis`,{username:localStorage.getItem("username")})
    // .then(res=>{
    //     console.log(res)
    //     setfetched_certi(res)
    // })
    getcertuseEf()
}, [])

   
  return (
    <div>
        <div className='container'>
            
     <h1 className="my-2 text-danger" style={{"textAlign":"center"}}>Your Certificates</h1>
          
          { 
            
            fetched_certi.length>0 && fetched_certi.map((single_certi)=>{
              
            
              return <Img_plate key={single_certi._id} _id={single_certi._id} avatar={single_certi.avatar} />
            })
          }
        </div>
    </div>
  )
}
