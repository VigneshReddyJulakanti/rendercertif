import noteContext from "./notecontext";
import { useState } from "react";



const NoteState=(props)=>{
  const port=process.env.PORT || 5000;


  
  // const host =`http://localhost:${port}`;
  const host='https://alert-bee-lapel.cyclic.app';
  // const host='https://rendercertificate.herokuapp.com';
  
  
 
    return(
    <noteContext.Provider value={{host}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState
