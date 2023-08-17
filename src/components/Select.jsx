import React, { useState } from "react";
import { memo } from "react";
import CreatableSelect from "react-select/creatable";
import "../csscomponent/SelectCss.css";
import Random from "./Random";
import Predefined from "./Predefined";
import { FcPlus } from "react-icons/fc";

function CreativeSelect({ render, setRender }) {
  const [random, setRandom] = useState("left");
  const [data, setData] = useState({ num: 0 });

  let selectOptions = [
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Php", label: "Php" },
  ];
  let selectOptions2 = [
    { value: "agent", label: "Agent" },
    { value: "candidate", label: "Candidate" },
  ];
  let selectOptions3 = [
    { value: "Pre Interview", label: "Pre Interview" },
    { value: "Post Interview", label: "Post Interview" },
  ];
  const [option, setOption] = useState(selectOptions);
  const [option2, setOption2] = useState(selectOptions2);
  const [option3, setOption3] = useState(selectOptions3);

  let onChanging = (name, { value, label }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(data);
  let handlechange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(data);
  let handlecreate = (inputValue) => {
    setOption((prev) => [...prev, { value: inputValue, label: inputValue }]);
  };
  console.log(option);

  return (
    <div className="main">
      <div>
        <label>Test Name</label>
        <div className="fcplus">
          <input
            type="text"
            placeholder="Enter test name"
            name="testName"
            onChange={handlechange}
            className="testName"
          />
          <div className="plus">
            <FcPlus
              onClick={() => {if(render.length<3){setRender([...render, ""])}}}
            />
          </div>
        </div>
      </div>

      <div>
        <label>Select test type or add new test type</label>
        <CreatableSelect
          name="Type"
          options={option}
          onChange={(obj) => onChanging("Type", obj)}
          defaultValue="Please Select"
          onCreateOption={handlecreate}
        />
      </div>
      <label>Managed By</label>
      <div className="radio">
        <CreatableSelect
          name="ManagedBy"
          options={option2}
          onChange={(obj) => onChanging("ManagedBy", obj)}
          defaultValue="Please Select"
          onCreateOption={handlecreate}
        />
        <label>isMcq</label><br />
        {data.ManagedBy==="agent"?<div className="radio1">
          Yes <input type="radio" disabled name="mangedBy" checked/>No<input type="radio" disabled name="mangedBy" />
        </div>:
        
        <>Yes <input type="radio"   name="mangedBy"  onClick={()=>setData({...data,isMcq:"true"})}/>No<input type="radio"  name="mangedBy" onClick={()=>setData({...data,isMcq:"false"})}/></>}
      </div>
      <div>
        <label>Screening type</label>
        <CreatableSelect
          name="Screening"
          options={option3}
          onChange={(obj) => onChanging("Screening", obj)}
          defaultValue="Please Select"
          onCreateOption={handlecreate}
        />
      </div>
      <div>
        <label>Total Number of question</label>
        <input
          type="number"
          placeholder="Enter no. of question"
          name="num"
          onChange={handlechange}
          className="num"
        />
      </div>

      {Number(data.num) ? (
        <>
          {random === "left" ? (
            <Random
              option={option}
              handlecreate={handlecreate}
              random={random}
              onChan={onChanging}
              setRandom={setRandom}
              data={data}
            ></Random>
          ) : (
            <Predefined
              random={random}
              setRandom={setRandom}
              option={option}
              handlecreate={handlecreate}
              onChan={onChanging}
            ></Predefined>
          )}
        </>
      ) : null}
      
      <div className="btn_css">
        <button className="btn">Submit Candidate test</button>
        <button className="btn">Final Submit test</button>
      </div>
    </div>
  );
}
export default memo(CreativeSelect);
