import React, { useContext } from "react";

const TeacherTable = ({teachers,  onUpdate, onDelete }) => {

  let currTeacher = teachers;
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Aadhaar</th>
          <th>Address</th>
          <th>Subject</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Due Amount</th>
          <th>Paid Amount</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currTeacher.map((teacher, index) => (
          <tr key={index}>
            <td>{teacher.name}</td>
            <td>{teacher.aadhaar}</td>
            <td>{teacher.address}</td>
            <td>{teacher.subject}</td>
            <td>{teacher.email}</td>
            <td>{teacher.contact}</td>
            <td>{teacher.amount.due}</td>
            <td>{teacher.amount.paid}</td>
            <td>{teacher.role}</td>
            <td>
              <div className="btn">
              <button onClick={() => onUpdate(index)} className="btn-update">
                Update
              </button>
              <button onClick={() => onDelete(teacher.aadhaar)} className="btn-delete">
                Delete
              </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;
