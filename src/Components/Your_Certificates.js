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

useEffect(() => {

    axios.post(`${host}/user/getcertis`,{username:localStorage.getItem("username")})
    .then(res=>{
        console.log(res)
        setfetched_certi(res.data)
    })
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
