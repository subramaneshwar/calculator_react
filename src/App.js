import { useState } from 'react';
import './App.css';
import Buttons from './Components/buttons';
import Display from './Components/display';
function App() {
  const [value, setvalue] = useState("0")
  const [result, setresult] = useState("0")
  
  return (
    <div className="App">
      <Display value={value} result={result} />
      <Buttons value={value} setvalue={setvalue} result={result} setresult={setresult}/>        
      <div style={{display:"flex", alignItems:"center",flexDirection:"column",padding:"10px",gap:"5px",fontWeight:"bold",color:"" }}>
      <p>Design and Coded by </p>
      <p>subramaneshwar</p>
      </div>
    </div>
  );
}

export default App;
