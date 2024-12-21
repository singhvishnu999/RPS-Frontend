import React, { useState } from "react";
import style from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({setState, setClassState, setStaffState}) => {
  const katcha = ["All", "PREP", "LKG", "UKG", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const staff = ["All", "Teacher", "Staff",];
  const [toggle, setToggle] = useState(0);  

  return (
    
      <div className={`${style.container}`}>
 
      <div className={`${style.list}`}>
          <button onClick={()=>{
            setState("dashboard")
            setClassState("All")
            }} className={`${style.list}`}>
            <h2> School Dashboard </h2>
          </button>
        </div>
        <hr />

        <div className={`${style.list}`}>
          <button
            onClick={() => {
              (toggle == 1 ? setToggle(0) : setToggle(1))
                setState('student')
            }}
            className={`${style.list}`}
          >
            Student Management
          </button>
          <hr />

          <div className={`${toggle == 1 ? style.yes : style.no}`}>

            {katcha.map((item, idx) => (
              <div key={idx} className={`${style.classe}`}>
                <button onClick={()=>setClassState(item)} className={`${style.list}`}>    
                  {item}
                </button>
              </div>
            ))}
            
          </div>
          <hr />
        </div>

            {/* for Teachers  */}
        <div className={`${style.list}`}>
          <button
            onClick={() => {
              toggle == 2 ? setToggle(0) : setToggle(2);
              setState('teacher')
            }}
            className={`${style.list}`}
          >
            Staff Management
          </button>
          <hr />
          <div className={`${toggle == 2 ? style.yes : style.no}`}>

          {staff.map((item, idx) => (
            <div key={idx} className={`${style.classe}`}>
              <button onClick={()=>setStaffState(item)} className={`${style.list}`}>
                {item}
              </button>
            </div>
          ))}
          </div>
          <hr />
          <div></div>
        </div>


        <div className={`${style.list}`}>
          <NavLink
            to="/admin/fee"
            className={`${style.list}`}
          >
            Fee Management
          </NavLink>
          <hr />
          <div className={`${toggle == 2 ? style.yes : style.no}`}>

          {staff.map((item, idx) => (
            <div key={idx} className={`${style.classe}`}>
              <button onClick={()=>setStaffState(item)} className={`${style.list}`}>
                {item}
              </button>
            </div>
          ))}
          </div>
          <hr />
          <div></div>
        </div>



      </div>
  );
};

export default Sidebar;
