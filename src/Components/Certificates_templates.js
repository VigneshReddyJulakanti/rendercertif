import React ,{useEffect} from 'react'
import template_1 from './Images/template_1.png'
import template_2 from './Images/template_2.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Certificates_templates() {
  const navigate = useNavigate()
  useEffect(() => {
 if(localStorage.getItem("authtoken")==null){
  navigate("/signin")
 }
  }, [])
  
  return (
    <div className='container-fluid'>
<div className='row'>

    <div  className='col-sm-6'>
    <div className="card my-3" style={{"width": "35rem"}}>
      <img src={template_1} className="card-img-top" alt="template_1"/>
      <div className="card-body">
        <h5 className="card-title">Achievement</h5>
        <Link to="/main" className="btn btn-primary">Use</Link>
      </div>
    </div>
    </div>
    <div  className='col-sm-6'>
    <div className="card my-3" style={{"width": "35rem"}}>
      <img src={template_2} className="card-img-top" alt="template_1"/>
      <div className="card-body">
        <h5 className="card-title">Appreciation</h5>
        <Link to="/main_2" className="btn btn-primary">Use</Link>
      </div>
    </div>
    </div>
    </div>
    
    
        </div>

  )
}
