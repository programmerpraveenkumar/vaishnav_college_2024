import { useState,useEffect } from "react";
export default function Approval(){
    const [list,setList]= useState([]);
    const getData=async ()=>{
           let res = await fetch("http://localhost:8080/admin/getUnApprovedList")
           let json  = await res.json();
           setList(json);
     }
     const approveConfirm=async (obj)=>{
        let id = {"id":obj._id}
        let res = await fetch("http://localhost:8080/admin/approveReview",{
            "method":"POST",
            body:JSON.stringify(id)
        })
        let json  = await res.json();
        setList(json);
  }
     //calling the during the page loading
     useEffect(()=>{
        //getData();
     },[])
    return(
        <>
        <div class="container-fluid pt-5">
        
        <div class="row px-xl-5">
            <div class="col-lg-5 mb-5">
                <div class="contact-form">
                <h1>Approval List</h1>                   
                </div>
                <div class="contact-form">
                {list.length <=0?<h1>No data found</h1>:null}           
                </div>
            </div>
          
            {
                list.map((obj,index)=>{
                    return(
                        <div key={index}>{obj.name} <button onClick={()=>approveConfirm(obj)}>Approve</button></div>
                    )
                    
                })
            }

            
            
        </div>
    </div>
        </>
    )
}