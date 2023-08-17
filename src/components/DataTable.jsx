import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import "../csscomponent/Table.css";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Question title", width: 300 },
  { field: "level", headerName: "Question level", width: 180 },
  { field: "technology", headerName: "Technology", width: 200 },
  { field: "questionType", headerName: "Question type", width: 180 },
];



export default function DataTable() {
  const [rows,setRows]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:5000/data").then((res)=>setRows(res.data))
},[])
  return (
    <div className="table">
      <DataGrid
        style={{zIndex:0}}
        rows={rows}
        columns={columns}
        initialState={{
        pagination: {
        paginationModel: { page: 0, pageSize: 5 },
        },
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
      />
    </div>
  );
}
