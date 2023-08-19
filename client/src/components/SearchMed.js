import React,{useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default function SearchMed() {

    const [name, setname]= useState("");
    const [uid, setUid]= useState(0);
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState(0.0);
    const [stock, setstock]= useState(0);
    const [allergy, setAllergy]= useState("");

    const [newStock, setNewStock]= useState(0);

    
    const getMed=()=>{
        axios.post('http://localhost:8000/medicine/find', {name})
        .then(res=>{
            console.log(res.data[0].uid);
            setUid(res.data[0].uid);
            setDisease(res.data[0].disease);
            setCpu(res.data[0].costPerUnit);
            setstock(res.data[0].incomingStock);
            setAllergy(res.data[0].allergyWarning);
        })
        .catch(err => console.error(err));
    }

    const handleChange = (e)=>{
        e.preventDefault();
        getMed();
    }


  return (
    <>
       <Navbar/>

        <form className='container my-5'>
        <div className="row mb-3">        
        <label for="inputMed" className="col-sm-2 col-form-label">Enter Medicine Name</label>
            <div className="col-sm-8">
                <input type="text" value={name} className="form-control" onChange={(e) => setname(e.target.value)} id="inputMed"/>
            </div>
            {console.log(name)}
            <div className='col-2'>
                <button onClick={handleChange}>Submit</button>
            </div>
        </div>
        </form>

        <div className='container my-3'>
        <h3>Description - </h3>
        <br/>

            <div className="col-12">
                <label for="inputAddress" className="form-label">Medicine Name : {name} </label>
            </div>

            <div className="col-md-12">
                <label className="form-label">UID : {uid} </label>
                
            </div>

            <div className="col-md-12">
                <label className="form-label">For Disease : {disease}</label>
                
            </div>
            <div className="col-md-6">
                <label className="form-label">Cost per Unit : {cpu}</label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Current Stock : {stock}</label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warning : {allergy} </label>
                
            </div>
                
        </div>
       
    </>
  )
}