import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import '../csscomponent/Addoption.css';
import {AiOutlineDelete} from "react-icons/ai"

function Addoption() {
  const [addOption,setAddoption]=useState([]);
  function deleteOptions(){
    let temp=[...addOption];
    temp.pop();
    setAddoption(temp);
  }
  return (
    <div  className="optionbox">
      <div className="fcplus1">
        <h3>Add Option</h3>
        
        <div className="plus1">
        <FcPlus onClick={()=>{if(addOption.length<4){setAddoption([...addOption,""])}}}/>
        </div>
          
          
      </div>
      {
        addOption.length>0?(
          addOption.map((ele,index)=>{
            return <div><h5>Option {index+1}</h5><input type="text" placeholder="option" className="num3"/>
                <label>isCorrect</label>
                <input  name="options1" type="radio" className="input_radio"/>
                <AiOutlineDelete onClick={deleteOptions}/>
            </div>
          })
        ):("")
      }
    </div>
  );
}
export default Addoption;


