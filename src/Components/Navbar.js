import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate()
    let location=useLocation();
    React.useEffect(() => {
        // console.log(location.pathname)
      }, [location]);

      const handlesignout =(a)=>{
        a.preventDefault()
        
        localStorage.removeItem('authtoken');
        localStorage.removeItem('username');
     
        navigate("/")
        

      }

    return (

        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">RenderC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className={`nav-link ${location.pathname!=="/"?"active":""}`}aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname!=="/certificates_templates"?"active":""}`} aria-current="page" to="/certificates_templates">Create Certificate</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname!=="/your_certificates"?"active":""}`} aria-current="page" to="/your_certificates">Your Certificates</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname!=="/verify_certificate"?"active":""}`} aria-current="page" to="/verify_certificate">Verify Certificate ID</Link>
        </li>

      </ul>
      
        {!localStorage.getItem('authtoken')? 
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className={`nav-link }`}aria-current="page" to="/signin"><button className='btn btn-primary btn-sm  '>Sign in</button></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} aria-current="page" to="/signup"> <button className='btn btn-primary btn-sm  '>Sign up</button></Link>
        </li></ul>:
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className={`nav-link `} aria-current="page" onClick={handlesignout} to="/"> <button className='btn btn-primary btn-sm  '>Sign Out</button></Link>
        </li>
        </ul>}
       

      
     
    </div>
  </div>
</nav>
        
        </>
     
    )
}
