import React,{useState} from 'react'
import axios from 'axios'
import StockAlert from './StockAlert';
// import { baseModelName } from '../../../server/models/medicine.schema';
import Navbar from './Navbar'

export default function Home() {

  const [mName, setmName]= useState("");
  const [uid, setUid]= useState(0);
  const [disease, setDisease]= useState("");
  const [cpu, setCpu]= useState(0.0);
  const [stock, setstock]= useState(0);
  const [allergy, setAllergy]= useState("");
  const [sellStock,setSellStock]=useState(0);

  const [list, setList]= useState([])
  // const [temp,setTemp]=useState({
  //   "mName":"",
  //   "uid":0,
  //   "cpu":0.0,
  //   "stock":0 
  // });
  const [sellMed, setSellMed] = useState([])
 

    const getMed=()=>{
       alert("Sold");
       axios.post('http://localhost:8000/medicine/bill', {mName,sellStock})
      .then(res=>{
        // console.log(res);        
        setUid(res.data.uid);
        setDisease(res.data.disease);
        setCpu(res.data.costPerUnit);
        setstock(res.data.incomingStock);
        setAllergy(res.allergyWarning);         
      })
      .catch(err => console.error(err));
    }
    
    let arr=[];
    const addItem = () => {
      let name = mName;
    
      axios
        .post('http://localhost:8000/medicine/find', { name })
        .then((res) => {
          if (res.data[0].uid === 0) {
            alert('Medicine not found');
            return;
          }
    
          const med = res.data[0];
    
          if (sellStock > med.incomingStock) {
            alert('Stock Low');
            return;
          }
    
          let temp = {
            mName: mName,
            uid: med.uid,
            cpu: med.costPerUnit,
            stock: sellStock,
          };
          let newArr = [...arr, temp];
          // arr.push(temp);
          alert('Medicine Added Successfully');
          setSellMed(newArr);
          arr = newArr;
        })
        .catch((err) => {
          console.error(err);
          alert('Error occurred while searching medicine');
        });
    };
  // const addItem=()=>{
  //   let name=mName
  //   axios.post('http://localhost:8000/medicine/find', {name})
  //     .then(res=>{
  //         // console.log(res.data[0].uid);
  //         if (res.data.length === 0) {
  //           alert('Medicine not found');
  //           return;
  //         }
  //         setUid(res.data[0].uid);
  //         setDisease(res.data[0].disease);
  //         setCpu(res.data[0].costPerUnit);
  //         setstock(res.data[0].incomingStock);
  //         setAllergy(res.data[0].allergyWarning);
          
          
  //         if(sellStock>stock)
  //           {
  //             alert("Stock Low");
  //           }
  //           else {
  //             let temp = {
  //               mName: mName,
  //               uid: uid,
  //               cpu: cpu,
  //               stock: sellStock,
  //             };
  //             arr.push(temp);
  //             console.log(temp);
  //             console.log(arr);
  //             alert("Medicine Added Successfully");
  //             setSellMed(arr); 
  //           }
  //         })
  //     .catch(err => {
  //       console.error(err);
  //     alert("Medicine not found")
  //   });
  // }
    
    
    // else {
    //   let temp = {
    //     mName: mName,
    //     uid: uid,
    //     cpu: cpu,
    //     stock: sellStock,
    //   };
    //   arr.push(temp);
    //   alert("Medicine Added Successfully");
    //   setSellMed([...arr]); 
   

    
  



  return (
    <>
        <Navbar/>
        <center>
        <div className='container my-5'>
            <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
              </tr>
              </thead>

             <tbody>
              {sellMed.map((med, index)=>(                
                   
                  <tr key={index}>
                      <td>{med.mName}</td>
                      <td>{med.uid}</td>
                      <td>{med.stock}</td>
                      <td>{med.cpu}</td>                       
                      
                      <td>{med.stock * med.cpu}</td>
                  </tr>
                ))
              }
              </tbody>

            </table>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">Medicine Name</span>
              <input type="text" value={mName} className="form-control" onChange={(e) => setmName(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

              <span className="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
              <input type="number" value={sellStock} className="form-control" onChange={(e) => setSellStock(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              <button type="button" className="btn btn-primary" onClick={addItem}>+ Add Medicine</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={getMed}>Complete Order</button>
        </div>
        </center>
    </>
  )
}
