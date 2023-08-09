import React,{useState,useEffect,useContext} from 'react'
import axios from "axios";
import Img_plate from './Img_plate';
import noteContext from '../context/notes/notecontext';
export default function Verify_Certificate() {
    const boom =useContext(noteContext)
    const {host}=boom
    const [success,setsuccess]=useState("noy yet");
    useEffect(() => {
        document.getElementById("verify_certificates_div").style.display="none";
    }, [])
    
    const [avat, setavat] = useState({});
    const handle_check=async()=>{
        const response = await fetch(`${host}/user/check`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // cors, *no-cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
             
            },
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
           // body data type must match "Content-Type" header
           body: JSON.stringify( {_id:document.getElementById("verify_id_input").value})
          });
  
          // console.log(response)
          // console.log("sending request")
          let res=await response.json();
            // axios.post(`${host}/user/check`,{_id:document.getElementById("verify_id_input").value})
            
                console.log(res)
                if (res.success===true){
                    
                    setsuccess(true);
                setavat(res.user);
                }else{
                    setsuccess(false);
                }
          

            document.getElementById("verify_certificates_div").style.display="block";

            


    }
  return (
    <div className='container  justify-content-center'>
        <div className='container d-flex justify-content-center'>
        <h2 className='my-3'>Enter id:</h2><input className='my-3' id='verify_id_input'></input>

        <button onClick={handle_check} className='btn btn-primary my-3'>Check</button>
        </div>
        <br></br>
        <div className='container d-flex justify-content-center' id='verify_certificates_div' style={{"display":"none"}}>

        {success!="not yet" && success===false && <p>You have entered an invalid id</p>}
        {(success===true) && <Img_plate avatar={avat.avatar} _id={avat._id} ></Img_plate>}
        </div>

    </div>
  )
}

