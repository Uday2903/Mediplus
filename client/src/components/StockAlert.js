import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default function StockAlert() {


  const [stocks,setStocks]=useState([])
  // let stocks = [];
  const display=()=>{
    axios.get('http://localhost:8000/medicine/stock-alert')
        .then(res=>{
            // console.log(res.data);
            setStocks(res.data);
            console.log(stocks)
        })
        .catch(err=> console.log(err));
  }

  // useEffect(() => {
  //   display();
  // }, []);

  return (
    <>
     <Navbar/>
     <div className='container my-5'>
     <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  {/* <th>Sr. No.</th> */}
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Current Stock</th>
                  
              </tr>
              </thead>
              {console.log(stocks)}
              {stocks.map((med, index)=>(  
              <tbody>
                
                    <tr key={index}>
                     
                        <td>{med.uid}</td>
                        <td>{med.name}</td>                        
                        <td>{med.incomingStock}</td>
                    </tr>
              </tbody>
               ))
              }

        </table> 
        <button onClick={display}>Get Stock Alert</button>
        </div>
    </>
  )
}