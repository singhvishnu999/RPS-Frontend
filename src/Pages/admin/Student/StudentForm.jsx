import {React, useContext, useState} from 'react'
import { AuthStore } from '../../../store/AuthStore';
import './student.css'

const StudentForm = () => {
    const {addStudent, transport, Class} = useContext(AuthStore);


  const [newStudent, setNewStudent] = useState({
    admissionNo:"",
    rollNo: "",
    name: "",
    age: "",
    fatherName: "",
    motherName: "",
    class: "",
    address: "",
    mobileNo : "",
    aadhar: "",
    transport: "",
    amount:{due:"",
    paid:"",}
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(newStudent);
    
    setNewStudent({admissionNo:"",
      rollNo: "",
      name: "",
      age: "",
      fatherName: "",
      motherName: "",
      class: "",
      address: "",
      mobileNo : "",
      aadhar: "", 
      transport: "",
      amount:{due:"", 
      paid:"",}})
  };

  return (
    <div>
        {/* Add New Student */}
    <form onSubmit={(e)=>handleSubmit(e)} className="add-student-form"> 
      <input
        type="text"
        placeholder="Admission No"
        value={newStudent.admissionNo}
        onChange={(e) => setNewStudent({ ...newStudent, admissionNo: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Roll No"
        value={newStudent.rollNo}
        onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={newStudent.age}
        onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Father's Name"
        value={newStudent.fatherName}
        onChange={(e) =>
          setNewStudent({ ...newStudent, fatherName: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Mother's Name"
        value={newStudent.motherName}
        onChange={(e) =>
          setNewStudent({ ...newStudent, motherName: e.target.value })
        }
        required
      />
      <select
          name="class"
          value={newStudent.class}
          onChange={(e)=>setNewStudent({ ...newStudent, class: e.target.value })}
          required
        >
          <option value="" disabled>class</option>
          {Class.map((t, ind)=>
        <option value={t} key={ind}> {t}</option>
        )}
        </select>

      <input
        type="text"
        placeholder="Address"
        value={newStudent.address}
        onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Mobile No."
        value={newStudent.mobileNo}
        onChange={(e) => setNewStudent({ ...newStudent, mobileNo: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Aadhar No."
        value={newStudent.aadhar}
        onChange={(e) => setNewStudent({ ...newStudent, aadhar: e.target.value })}
        required
      />
      <select
        value={newStudent.transport}
        onChange={(e) =>
          setNewStudent({ ...newStudent, transport: e.target.value })
        }
        required
      >
        <option value="" disabled>
          Transport Facility
        </option>
        {transport.map((t, ind)=>
        <option value={t} key={ind}> {t}</option>
        )}
      </select>

      <input
        type="text"
        placeholder="Due Amount"
        value={newStudent.amount.due}
        onChange={(e) => setNewStudent({ ...newStudent, amount:{...newStudent.amount, due: e.target.value }})}
        required
      />
      <input
        type="text"
        placeholder="Paid Amount"
        value={newStudent.amount.paid}
        onChange={(e) => setNewStudent({ ...newStudent,amount:{...newStudent.amount, paid: e.target.value }})}
        required
      />
      <button type="submit" className="btn-primary">
        Add Student
      </button>
    </form>
    </div>
  )
}

export default StudentForm