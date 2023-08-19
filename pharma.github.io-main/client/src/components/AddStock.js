import React,{useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar'


export default function AddStock() {

    const [name, setname]= useState("");
    const [uid, setUid]= useState(0);
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState(0.0);
    const [stock, setstock]= useState(0);
    const [allergy, setAllergy]= useState("");

    const [newStock, setNewStock]= useState(0);

    
    // const getMed=()=>{
    //     axios.post('http://localhost:8000/medicine/find' , name)
    //     .then(res=>{
    //         setUid(res.data[0].uid);
    //         setDisease(res.data[0].uid);
    //         setCpu(res.data[0].cpu);
    //         setstock(res.data[0].stock);
    //         setAllergy(res.data[0].allergy);
    //     })
    //     .catch(err => console.error(err));
    // }
    const updateMed = () => {
        axios.put('http://localhost:8000/medicine/',{name,newStock})
            .then(res=>{
                console.log(res);
                axios.post('http://localhost:8000/medicine/find', {name})
                .then(response => {
                    console.log(response);
                    setUid(response.data[0].uid);
                    setDisease(response.data[0].disease);
                    setCpu(response.data[0].costPerUnit);
                    setstock(response.data[0].incomingStock);
                    setAllergy(response.data[0].allergyWarning);
                    alert("Stock added Successfully")
                })
                .catch(err => {
                    alert("Med not found");
                    console.error(err)});
    
                
            })
            .catch(err => {
                alert("Med not found");
                console.error(err)});
    }
    const handleChange = (e) => {
        e.preventDefault();
        updateMed();
    }

    // const check=(event)=>{
    //     setname(event.target.value);
    //     getMed();
    // }


    const sendData = (event) =>{
        event.preventDefault();
        if(uid===0)
        {
            // appendAlert();
           
        }
        else
        {
            // greenAlert();
           
            
        }
    }


  return (
    <>
       <Navbar/>

        <form className='container my-5'>
        <div className="row mb-3">        
        <label for="inputMed" className="col-sm-2 col-form-label">Enter Medicine Name</label>
            <div className="col-sm-10">
                <input type="text" value={name} className="form-control" onChange={(e) => setname(e.target.value)} id="inputMed"/>
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
                <label className="form-label">Current Stock : {stock}{console.log(stock)}</label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warning : {allergy} </label>
                
            </div>

            <br/>
            <br/>

            <div className="col-md-6">
                <label className="form-label">Incoming Stock - </label>
                <input type="text" className="form-control" onChange={(e) => setNewStock(e.target.value)} id="newStock"/>
            </div>

            <div className="col-md-6 my-3">
                <button type="submit" onClick={handleChange} className="btn btn-primary">Add Stock</button>
            </div>
        </div>
    </>
  )
}