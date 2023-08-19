import React,{useState} from 'react';
import axios from 'axios'
import Navbar from './Navbar';

export default function NewMed() {

    const [mName, setmName]= useState("");
    const [uid, setUid]= useState(0);
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState(0.0);
    const [stock, setstock]= useState(0);
    const [allergy, setAllergy]= useState("");

    const newMed= () =>{

        axios.post('http://localhost:8000/medicine', {
            mName, uid, disease, cpu, stock, allergy
        } )
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }



    
    const sendData = (event) =>{
        event.preventDefault();
        if(mName==="" || uid===0 || disease==="" || cpu===0.0 || allergy==="")
        {
            
            alert("Fill the complete form")
        }
        else
        {
                       
            newMed();
            alert("Medicine added Successfully")
        }
    }




  return (
    <>
        <Navbar/>
        <div className='container my-3'>
        <h3>Add New Medicine</h3>
        <br/>
        <form className="row g-3" id="NewMed">

            <div className="col-12">
                <label for="inputAddress" className="form-label">Medicine Name</label>
                <input type="text" value={mName} className="form-control" onChange={(e) => setmName(e.target.value)} id="MedName"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">UID</label>
                <input type="text" className="form-control" onChange={(e) => setUid(e.target.value)} id="UID"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">Disease</label>
                <input type="text" className="form-control" onChange={(e) => setDisease(e.target.value)} id="Disease"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Cost per Unit</label>
                <input type="text" className="form-control" onChange={(e) => setCpu(e.target.value)} id="CostPerUnit"/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Incoming Stock</label>
                <input type="text" className="form-control" onChange={(e) => setstock(e.target.value)} id="incomingStock"/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warnin &#40; enter "na" if none &#41;</label>
                <input type="text" className="form-control" onChange={(e) => setAllergy(e.target.value)} id="AllergyWarning"/>
            </div>
            
            <div className="col-12">
                <button type="submit" onClick={sendData} className="btn btn-primary" id="addMed">Add Medicine</button>
            </div>
            
        </form>
        </div>
    </>
  )
}