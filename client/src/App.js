import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState("");
  const [position,setPosition] = useState("");
  const [wages,setWages] = useState(0);

  const submitdata=()=>{
    Axios.post("http://localhost:3001/create",{
      name:name,
      age:age,
      country:country,
      position:position,
      wages:wages,
    }).then(()=>{
      console.log("success");
    })
  
  }

  return (
    <div className="App">
      <div className="information">
     <label>Name:</label>
     <input type="text" 
     onChange={(event)=>{
      setName(event.target.value)
 }}/>

    <label>Age:</label>
     <input type="number" onChange={(event)=>{
      setAge(event.target.value)
 }}/>
     <label>Country:</label>
     <input type="text" onChange={(event)=>{
      setCountry(event.target.value)
 }}
     />
     <label>Position:</label>
     <input type="text" onChange={(event)=>{
      setPosition(event.target.value)
 }}/>
     <label>Wages:</label>
     <input type="number" onChange={(event)=>{
      setWages(event.target.value)
 }}/>
     <button onClick={submitdata}>submitdata</button>
     </div>
    </div>
  );
}

export default App;
