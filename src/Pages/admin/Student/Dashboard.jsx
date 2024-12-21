import React, { useContext } from "react";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
import { AuthStore } from "../../../store/AuthStore";

const Dashboard = ({students, teachers, setState}) => {

    const {isLoading} = useContext(AuthStore);
  let totalDue = 0;
 if(!isLoading){
    for(let i=0; i < students.length; i++){
      totalDue += students[i].amount.due;
    }}

  return (
    <>
   { !{isLoading} ? <div>loading...</div> : 
    <div className="dashboard">
      
      {/* Main Content */}
      <main className="content">
        <header>
          <h1>Welcome to Rohtas Public School Dashboard</h1>
        </header>
        <section className="stats">
          <button className="card" onClick={()=>setState('student')}>
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </button>

          <button className="card" onClick={()=>setState('teacher')}>
            <h3>Total Staff</h3>
            <p>{teachers.length}</p>
          </button>
          <div className="card">
            <h3>Admissions Pending</h3>
            <p>12</p>
          </div>

        <div className="card">
          <NavLink to='/admin/fee' className="nav-links">
            <h3>Add Fee</h3>
          </NavLink>
            <p> Total Due : {totalDue}</p>
          </div>
        </section>
        <section className="recent">
          <h2>Recent Updates</h2>
          <ul>
            <li>New admission requests received today.</li>
            <li>Class 5 won the science competition.</li>
            <li>Sports day scheduled for next week.</li>
          </ul>
        </section>
      </main>
    </div>
  }
  </>
  );
};

export default Dashboard;
