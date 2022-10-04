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
    const handle_check=()=>{
            axios.post(`${host}/user/check`,{_id:document.getElementById("verify_id_input").value})
            .then(res=>{
                console.log(res)
                if (res.data.success===true){
                    
                    setsuccess(true);
                setavat(res.data.user);
                }else{
                    setsuccess(false);
                }
            });

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

