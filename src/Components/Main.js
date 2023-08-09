import React,{useState,useContext} from 'react'
import axios from "axios";
import jsPDF from 'jspdf';
import noteContext from '../context/notes/notecontext';

export default function Main() {

    
    

    const boom =useContext(noteContext)
    const {host}=boom
    // https://res.cloudinary.com/duqmawhn8/image/upload/v1664781202/signature_tbhxik.png
// link type /upload/logo_link/w_800,h_500/name_link/text1_link/text2_link
    // let usedtemplateImg="https://res.cloudinary.com/duqmawhn8/image/upload/w_150,h_150,y_-480,l_sample_logo_ieszgb/w_800,h_500/y_50,l_text:Wellfleet_40_bold:Sample%20Name/y_-10,l_text:Wellfleet_20:Sample%20text_1(write%20something)/y_110,l_text:Wellfleet_20:Sample%20text_2(write%20something)/w_70,h_60,y_170,l_signature_tbhxik/v1664733880/template_1_osoq8t.png";

    let templateImg="https://res.cloudinary.com/dsxvfg4gt/image/upload/w_150,h_150,y_-480,l_sample_logo_z3wsng/w_800,h_500/y_50,l_text:Wellfleet_40_bold:Sample%20Name/y_-10,l_text:Wellfleet_20:Sample%20text_1(write%20something)/y_110,l_text:Wellfleet_20:Sample%20text_2(write%20something)/w_70,h_60,y_170,l_signature_mgbgdm/v1664831448/template_1_zsdgaq.png";


  
    // const [logoimg, setlogoimg] = useState('');  
    const[presentimg,setpresentimg]=useState(templateImg);
        const logoOnChange=async(e)=>{
            
            // setlogoimg(e.target.files[0])
            const data=new FormData();
            data.append("image",e.target.files[0]);


            const response = await fetch(`${host}/user`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // cors, *no-cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json',
                 
                },
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
               // body data type must match "Content-Type" header
               body: JSON.stringify( data)
              });
      
              // console.log(response)
              // console.log("sending request")
              let res=await response.json();
            // axios.post(`${host}/user`, data) 
           
                let s=presentimg.indexOf("upload")+7;
                let r=presentimg.indexOf("w_800");
                let final_text=presentimg.slice(0,s)+"w_150,h_150,y_-480,l_"+res.cloudinary_id+"/"+presentimg.slice(r);
             
                
                setpresentimg(final_text);
         
           

        }


        const nameOnSubmit=(e)=>{
            let s=presentimg.indexOf(",h_500/")+7;
            let r=0;
            for (let i=s;i<presentimg.length;i++){
                if (presentimg[i]=="/"){
                    r=i;
                    break;
                }
            }
            let nname=document.getElementById("nameChangeinput").value;
            let fname="";
            
            for(let i of nname){
                if(i==" "){
                    fname+="%20";
                }else{
                    fname+=i;
                }
            }
            let final_text=presentimg.slice(0,s)+"y_50,l_text:Wellfleet_40_bold:"+fname+presentimg.slice(r);
            setpresentimg(final_text);
        }


        const text1OnSubmit=(e)=>{
            let s=presentimg.indexOf(",h_500/")+7;
            let ss=0;
            let r=0;
            let f=0;
            for (let i=s;i<presentimg.length;i++){
                if (presentimg[i]=="/"){
                    if (f==1){
                    r=i;
                    break;
                    }
                    if(f==0){
                        ss=i;
                    }
                    f=1;
                }
            }
            let nname=document.getElementById("text1Changeinput").value;
            let fname="";
            
            for(let i of nname){
                if(i==" "){
                    fname+="%20";
                }else{
                    fname+=i;
                }
            }
            let final_text=presentimg.slice(0,ss+1)+"y_-10,l_text:Wellfleet_20:"+fname+presentimg.slice(r);
            setpresentimg(final_text);
        }
        const text2OnSubmit=()=>{

            let s=presentimg.indexOf(",h_500/")+7;
            let ss=0;
            let r=0;
            let f=0;
            for (let i=s;i<presentimg.length;i++){
                if (presentimg[i]=="/"){
                    if (f==2){
                    r=i;
                    break;
                    }
                    if(f==1){
                        ss=i;
                        f=2
                    }
                    if(f==0){
                    f=1;}
                }
            }
            let nname=document.getElementById("text2Changeinput").value;
            let fname="";
            
            for(let i of nname){
                if(i==" "){
                    fname+="%20";
                }else{
                    fname+=i;
                }
            }
            let final_text=presentimg.slice(0,ss+1)+"y_110,l_text:Wellfleet_20:"+fname+presentimg.slice(r);
            setpresentimg(final_text);

        }

        const signatureOnChange=async(e)=>{
          
            const data=new FormData();
            data.append("image",e.target.files[0]);

            const response = await fetch(`${host}/user`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // cors, *no-cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json',
                 
                },
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
               // body data type must match "Content-Type" header
               body: JSON.stringify( data)
              });
      
              // console.log(response)
              // console.log("sending request")
              let res=await response.json();
            // axios.post(`${host}/user`, data)
           
                //console.log(res)
                let s=presentimg.indexOf(",h_500/")+7;
            let ss=0;
            let r=0;
            let f=0;
            for (let i=s;i<presentimg.length;i++){
                if (presentimg[i]=="/"){
                    if (f==3){
                    r=i;
                    break;
                    }
                    if(f==2){
                        ss=i;
                        f=3
                    }
                    if (f==1){
                        f=2
                    }
                    if(f==0){
                    f=1;}
                    
                }
            }
             
                let final_text=presentimg.slice(0,ss+1)+"w_70,h_60,y_170,l_"+res.cloudinary_id+"/"+presentimg.slice(r);
                
                setpresentimg(final_text);
        
        }



        const makePdf=async()=>{
            let data={
                username:localStorage.getItem("username"),
                avatar:presentimg
            }
            const response = await fetch(`${host}/user/save`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'no-cors', // cors, *no-cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                // headers: {
                //   'Content-Type': 'application/json',
                 
                // },
                headers: new Headers({'content-type': 'application/json'}),
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
               // body data type must match "Content-Type" header
               body:JSON.stringify( data)
              });
      
              // console.log(response)
              // console.log("sending request")
              console.log(response)

              let res=await response.json();
            //   let res=response;
            // axios.post(`${host}/user/save`, data)
          
               
            var doc = new jsPDF();
            doc.text("Certificate",100,10)
            doc.addImage(presentimg,5,40,200,125)
            doc.text(`certificate id:${res._id}`,5,290)
            doc.save("hello.pdf")
       
        
        }
  return (
    <>
    <div className='container-fluid' id='main_container'>
        <div className='row'>
            <div className='col-sm-3' id='left_side_part_main'>
                <p> <p className='white_text my-3'>Change Logo (takes 2 Seconds) </p><input onChange={logoOnChange} type={"file"} className='white_text' /></p>
                <hr></hr>
                <p > </p><input id="nameChangeinput"  type={"text"} placeholder="Enter Name" /><p className='white_text'><button className="my-2" onClick={nameOnSubmit}>Change Name </button></p>
                <hr></hr>
                <p > <input id="text1Changeinput"  type={"text"}  placeholder="Enter Text-1"/><p className='white_text'><button onClick={text1OnSubmit}>Change text1 </button></p></p>
                <hr></hr>

                <p ><input id="text2Changeinput"  type={"text"} placeholder="Enter Text-2" /> <p className='white_text'><button onClick={text2OnSubmit}>Change text2 </button></p></p>
                <hr></hr>

                <p > <p className='white_text'>Change Signature (takes 2 Seconds) </p><input onChange={signatureOnChange} type={"file"} className='white_text' /></p>
                <hr></hr>

                <button onClick={makePdf}>Download</button>
               
            </div>
            <div id='main_right_side' className='col-sm-9 d-flex justify-content-center'>
                <div className='container my-3 d-flex justify-content-center'>
                    <img id="themainimg" src={presentimg} alt='certificate template' className='img-thumbnail my-3'></img>
                </div>

            </div>
        </div>

    </div>
    
    </>
  )
}
