import {sueState, useState} from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css"
function App(){
  const[name,setName]=useState("");
  return(
    <>
    
      
      <Register/>
      
    </>
  )
}
export default App;