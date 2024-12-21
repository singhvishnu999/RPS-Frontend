import React, { useContext, useState } from "react";
import { AuthStore } from "../../../store/AuthStore";
import { toast } from "react-toastify";

const PaidFee = ({ student, onCancel }) => {
  const { feePaid } = useContext(AuthStore);

  const [formData, setFormData] = useState({
    name: student.name,
    fatherName: student.fatherName,
    Class: student.class,
    rollNo: student.rollNo,
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount) {
      toast.error("Filled Details");
    } else feePaid(formData); //function call
    setFormData({
      name: "",
      fatherName: "",
      Class: "",
      rollNo: "",
      amount: "",
    });
    onCancel();
  };

  return (
    <div>
      <div className="fee-management">
        <h1>Student Fee Payment</h1>

        <form className="fee-form" onSubmit={handleSubmit}>
          <label>
            Student's Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Father's Name
            <input
              type="text"
              name="fatherName"
              onChange={handleChange}
              value={formData.fatherName}
              required
            />
          </label>
          <label>
            class
            <input type="text"
             name="Class" value={formData.Class} 
             onChange={handleChange}
             required />
          </label>
          <label>
            Roll No.
            <input
              type="number"
              name="rollNo"
              onChange={handleChange}
              value={formData.rollNo}
              required
            />
          </label>
          <label>
            Pay Amount
            <input
              type="number"
              name="amount"
              placeholder={student.amount.due}
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </label>
          <button type="button" className="btn-danger" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Pay Fee
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaidFee;
