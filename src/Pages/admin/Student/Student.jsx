import React, { useState, useContext } from "react";
import "./student.css";
import StudentForm from "./StudentForm";
import PaidFee from "./PaidFee";
import { AuthStore } from "../../../store/AuthStore";
import Loader from "../../../Components/Loader"

const Student = ({setIndex, students}) => {
  const [isShowForm, setIsShowForm] =  useState(true);
  const [idx, setIdx] = useState(0);
  const {isLoading} = useContext(AuthStore);
  

  return (
    <div className="student-table">
    {isLoading ? <Loader/> : <>
    <h1>Student Data (Class-wise)</h1>
   {isShowForm ? <StudentForm/> : <PaidFee onCancel={()=>setIsShowForm(true)} student={students[idx]}/>}
  
    {/* Student Table */}
    <div className="student-overview">
  <h1>Student Overview</h1>

  <table>
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Name</th>
        <th>Class</th>
        <th>Roll.No</th>
        <th>Father's Name</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={index}>
          <td>{index+1}</td>          
          <td>{student.name}</td>
          <td>{student.class}</td>          
          <td>{student.rollNo}</td>
          <td>{student.fatherName}</td>
          <td>{student.address}</td>
          <td>
            <button
              className="btn-primary"
              onClick={() => {
                setIndex(index)
                setIdx(index)
                setIsShowForm(false);
               }
              }
            >
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>
}
  </div>
  );
};

export default Student;
