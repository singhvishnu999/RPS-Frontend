import { React, useContext, useState } from 'react';
import { AuthStore } from '../../../store/AuthStore';

const UpdateStudent = ({students, onCancel}) => {
  const { updateStudent, transport, Class } = useContext(AuthStore);

  // Initialize state with the student's data
  const [newStudent, setNewStudent] = useState({
    admissionNo: students.admissionNo,
    rollNo: students.rollNo,
    name: students.name,
    age: students.age,
    fatherName: students.fatherName,
    motherName: students.motherName,
    class: students.class,
    address: students.address,
    mobileNo: students.mobileNo,
    aadhar: students.aadhar,
    transport: students.transport,
    amount: {
      due: students.amount?.due || '',
      paid: students.amount?.paid || '',
    },
  });

  // Handle generic input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('amount.')) {
      // Update nested 'amount' object
      const field = name.split('.')[1];
      setNewStudent((prev) => ({
        ...prev,
        amount: {
          ...prev.amount,
          [field]: value,
        },
      }));
    } else {
      // Update top-level fields
      setNewStudent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateStudent(students._id, newStudent);
    onCancel(); 
  };

  return (
    <div>
         <h1 style={{color:'#004d80'}}>Update Student</h1>
      <form onSubmit={handleEdit} className="add-student-form">
        <input
          type="text"
          name="admissionNo"
          placeholder="Admission No"  
          value={newStudent.admissionNo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={newStudent.rollNo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          value={newStudent.fatherName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          value={newStudent.motherName}
          onChange={handleInputChange}
          required
        />
        <select
          name="class"
          value={newStudent.class}
          onChange={handleInputChange}
          required
        >
          {Class.map((t, ind)=>
        <option value={t} key={ind}> {t}</option>
        )}
        </select>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newStudent.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No"
          value={newStudent.mobileNo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="aadhar"
          placeholder="Aadhar"
          value={newStudent.aadhar}
          onChange={handleInputChange}
          required
        />
        <select
          name="transport"
          value={newStudent.transport}
          onChange={handleInputChange}
          required
        >
          {transport.map((t, ind)=>
        <option value={t} key={ind}> {t}</option>
        )}

        </select>
        <input
          type="text"
          name="amount.due"
          placeholder="Due Amount"
          value={newStudent.amount.due}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="amount.paid"
          placeholder="Paid Amount"
          value={newStudent.amount.paid}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn-primary">
          Update Student
        </button>

        <button type="button" className="btn-danger"
        onClick={onCancel}>
          Cancel
        </button>
      </form>
      </div>
    
  );
};

export default UpdateStudent;
