import { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
function App() {
  const [render,setRender]=useState([""]);
  
  return (
    <>
      <div className="app">
      <h3 className="heading">Online Test</h3>
     {render.map((ele)=>{
      return <Select render={render} setRender={setRender}/>
     })}
      </div>
    </>
  );
}

export default App;
