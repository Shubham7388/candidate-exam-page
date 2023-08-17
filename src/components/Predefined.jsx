import React, { useState, useRef } from "react";
import CreatableSelect from "react-select/creatable";
import "../csscomponent/Predefined.css";
import AddnewQuestion from "./AddnewQuestion";
import DataTable from "./DataTable";

function Predefined({ setRandom, handlecreate, option, onChan, random }) {
  const [addnew, setaddNew] = useState(false);

  const [details, setDetails] = useState({ technology: [], questionType: [] });

  let questiontype = [
    { value: "mcq", label: "MCQ" },
    { value: "programming", label: "Programming" },
    { value: "Descriptive", label: "Descriptive" },
  ];

  const selectInputRef = useRef(null);

  const onClear = () => {
    setDetails({ technology: [], questionType: [] });
  };

  const onCreatableSelect = (name, value) => {
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="btn1">
        <button
          className={random === "left" ? "random" : "randomUnselect"}
          onClick={() => setRandom("left")}
        >
          Random Question
        </button>
        <button
          className={random === "right" ? "random" : "randomUnselect"}
          onClick={() => setRandom("right")}
        >
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
        <div className="techno">
          <div>
            <label>Technology</label> <br />
            <div className="select1">
              <CreatableSelect
                isMulti
                ref={selectInputRef}
                name="technology"
                options={option}
                onChange={(value) => onCreatableSelect("technology", value)}
                value={details.technology}
                onCreateOption={handlecreate}
              />
            </div>
          </div>

          <div>
            <label>Question Type</label> <br />
            <div className="select1">
              <CreatableSelect
              isMulti
                ref={selectInputRef}
                name="questionType"
                options={questiontype}
                onChange={(value) => onCreatableSelect("questionType", value)}
                value={details.questionType}
                onCreateOption={handlecreate}
              />
            </div>
          </div>
          <div>
            <br />
            <div style={{ display: "flex" }} className="preBtn">
              <button className="btn2">Search</button>
              <button className="btn2" onClick={onClear}>
                Clear
              </button>
              <button className="btn2" onClick={() => setaddNew(true)}>
                Add new Question
              </button>
            </div>
          </div>
        </div>
      </div>
      {addnew ? (
        <AddnewQuestion
          onChan={onChan}
          handlecreate={handlecreate}
          setaddNew={setaddNew}
        />
      ) : null}
      <DataTable />
    </div>
  );
}
export default Predefined;
