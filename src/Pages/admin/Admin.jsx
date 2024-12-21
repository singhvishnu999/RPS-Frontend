import { React, useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Student from "./Student/Student";
import "./admin.css";
import Dashboard from "./Student/Dashboard";
import StudentDetails from "./Student/StudentDetails";
import { AuthStore } from "../../store/AuthStore";
import Teacher from "./Teacher/Teacher ";
import { AuthTeacher } from "../../store/TeacherStore";


const Admin = () => {
  const [index, setIndex] = useState(-1);
  const { students, isLoading, setIsLoading } = useContext(AuthStore);
  let newStudent = students;
  const [state, setState] = useState("dashboard");
  const [classState, setClassState] = useState(null);
  
  const {teachers} = useContext(AuthTeacher)
  let currTeacher = teachers;
  const [staffState, setStaffState] = useState(null);

  if (classState) {
    setIsLoading(true)
    if (classState == "All") newStudent = students;
    else newStudent = students.filter((st) => st.class == classState);
    setIsLoading(false)
  }

  if(staffState){
    setIsLoading(true)
    if(staffState=="All") 
      currTeacher = teachers;
    else 
    currTeacher = teachers.filter((st) => st.role == staffState)
    setIsLoading(false)
  }


  return (
   
    <div>
      <div className="container">
        <div className="sidebar">
          <Sidebar setState={setState} setClassState={setClassState} setStaffState={setStaffState}/>
        </div>
        {state === "dashboard" && ( //Dashboard
          <div className="dashboard">
            <Dashboard setState={setState} students={students} teachers = {teachers}/>
          </div>
        )}

        {state === "student" && ( // Student Details
          <div>
            <Student setIndex={setIndex} students={newStudent} />
          </div>
        )}
        {state === "student" && index >= 0 && index<newStudent.length && (
          <div>
            <StudentDetails students={newStudent[index]} setIndex={setIndex} index={index}/>
          </div>
        )}

            {/* Teacher Details */}
        {state === "teacher" && <div className="staff"><Teacher teachers={currTeacher}/></div>}  
      </div>
     
    </div>
  );
};

export default Admin;
