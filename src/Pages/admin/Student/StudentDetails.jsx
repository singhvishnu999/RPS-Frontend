import { useContext, useState } from 'react';
import './studentDetails.css';
import { AuthStore } from '../../../store/AuthStore';
import UpdateStudent from './UpdateStudent';
const StudentDetails = ({students, setIndex, index}) => {

  const {deleteStudent} = useContext(AuthStore);  
  const [showUpdate, setShowUpdate] = useState(false)

  return (
    <>
      {showUpdate ? <UpdateStudent students={students} setShowUpdate={setShowUpdate} 
      onCancel={()=>setShowUpdate(false)}/> :
    <div className="student-details">
      <h1>Student Details</h1>
      <div className="details-card">
        <p><strong>Admission No.:</strong> {students.admissionNo}</p>
        <p><strong>Roll No:</strong> {students.rollNo}</p>
        <p><strong>Name:</strong> {students.name}</p> 
        <p><strong>Father's Name:</strong> {students.fatherName}</p>
        <p><strong>Mother's Name:</strong> {students.motherName}</p>
        <p><strong>Class:</strong> {students.class}</p>
        <p><strong>Address:</strong> {students.address}</p>
        <p><strong>Age:</strong> {students.age}</p>
        <p><strong>Aadhar No:</strong> {students.aadharNo}</p>
        <p><strong>Mobile No:</strong> {students.mobileNo}</p>
        <p><strong>Transport:</strong> {students.transport}</p>
        <p><strong>Due Amount:</strong> {students.amount.due}</p>
        <p><strong>Paid Amount:</strong> {students.amount.paid}</p>
      <button
              className="btn-primary" 
              onClick={() => {
                setShowUpdate(true);
                setIndex(index)
              }} 
              >
            Update
      </button>
      <button
              className="btn-danger"
              onClick={()=>{deleteStudent(students.rollNo, students.class)
                setIndex(-1)}} 
                >
            Delete
      </button>
              </div>
    </div>}
    </>
    );
};

export default StudentDetails;
