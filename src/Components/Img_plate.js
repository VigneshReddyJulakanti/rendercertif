import React from 'react'
import jsPDF from 'jspdf';
export default function 
(props) {

        const ondownloadclick=()=>{
            var doc = new jsPDF();
            doc.text("Certificate",100,10)
            doc.addImage(props.avatar,5,40,200,125)
            doc.text(`certificate id:${props._id}`,5,290)
            doc.save("hello.pdf")
        }


  return (
    <div className="my-3 d-flex justify-content-center">
        <div className="card my-3 d-flex justify-content-center" style={{"width": "35rem"}}>
      <img src={props.avatar} className="card-img-top" alt="cat"/>
      <div className="card-body">
        <h5 className="card-title">id:{props._id}</h5>
        <button onClick={ondownloadclick} className="btn btn-primary">Download</button>
      </div>
    </div>
    </div>
  )
}
