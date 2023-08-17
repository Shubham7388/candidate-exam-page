import React from "react";
import "../csscomponent/Random.css";
import CreatableSelect from "react-select/creatable";

function Random({ handlecreate, option, onChan, setRandom ,random,data}) {
  return (
    <>
      <div className="btn1">
        <button className={(random==="left")?"random":"randomUnselect"} onClick={() => setRandom("left")}>Random Question</button>
        <button className={random==="right"?"random":"randomUnselect"} onClick={() => setRandom("right")}>
          Predefined Questions
        </button>
      </div>
      <div className="main1">
        <div>
          <label>Number of Question</label>
          <input
            type="number"
            placeholder="Enter no. of question"
            name="num1"
            className="num1"
          />
        </div>
        <div>
          <label>Technology</label>
          <div className="select">
            <CreatableSelect
              name="Technology"
              options={option}
              onChange={(obj) => onChan("Technology", obj)}
              defaultValue="Please Select"
              onCreateOption={handlecreate}
            />
          </div>
        </div>
        {data.isMcq==="false"?<div>
          <label>Number of MCQ question</label>
          <input
            type="number"
            placeholder="Enter no. of question"
            name="num1"
            className="num1"
          />
        </div>:""}
      </div>
    </>
  );
}
export default Random;
