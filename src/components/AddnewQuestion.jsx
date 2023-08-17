import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Addoption from "./Addoption";
import axios from "axios";

function AddnewQuestion({ handlecreate, onChan,setaddNew }) {
  let selectOptions = [
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Php", label: "Php" },
  ];
  let questiontype = [
    { value: "mcq", label: "MCQ" },
    { value: "programming", label: "Programming" },
    { value: "Descriptive", label: "Descriptive" },
  ];
  let questionsLevel = [
    { value: "intermediate", label: "intermediate" },
    { value: "easy", label: "easy" },
    { value: "hard", label: "hard" },
  ];
  const [opt, setopt] = useState(questiontype);
  const [selectopt, setselectopt] = useState(selectOptions);
  const [form,setForm]=useState({title:"",technology:"",questionType:"",level:""});


  function addQuestion(){
    axios.post("http://localhost:5000/data",form);
    alert("Question Added !");
    setForm({title:"",technology:"",questionType:"",level:""});
  }
  console.log(form);
  return (
    <div>
      <div className="qbox">
      <h3>Add Question</h3>
        <div>
          <label>Technology</label>
          <div className="select">
            <CreatableSelect
              name="Type"
              options={selectopt}
              onChange={(obj) =>setForm({...form,"technology":obj.value})}
              defaultValue="Please Select"
              onCreateOption={handlecreate}
            />
              
          </div>
        </div>
        <div>
          <label>Level</label>
          <div className="select">
            <CreatableSelect
              name="Type"
              options={questionsLevel}
             
              onChange={(obj) => setForm({...form,"level":obj.value})}
              defaultValue="Please Select"
              onCreateOption={handlecreate}
            />
          </div>
        </div>
        <div>
          <label>Question Type</label> <br />
          <div className="select1">
            <CreatableSelect
              name="Technology"
              
              options={opt}
              onChange={(obj) => setForm({...form,"questionType":obj.value})}
              defaultValue="Please Select"
              onCreateOption={handlecreate}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Question Title</label>
          </div>
          <input type="text" value={form.title} name="num1" className="num1" onChange={(obj)=>setForm({...form,"title":obj.target.value})}/>
        </div>
        <Addoption />
        <div className="preBtn1">
          <button className="question_btn" onClick={addQuestion}>Create</button>
          <button className="question_btn">Create And Save</button>
          <button onClick={(e) => setaddNew(false)} className="question_btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddnewQuestion;
