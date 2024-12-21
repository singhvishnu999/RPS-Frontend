import React, { useContext, useState } from "react";
import { AuthTeacher } from "../../../store/TeacherStore";

const TeacherForm = () => {
  const { addTeacher } = useContext(AuthTeacher);

  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    address: "",
    subject: "",
    email: "",
    contact: "",
    role: "",
    amount: { paid: "", due: "", },
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    addTeacher(formData);
  };

  return (
    <div className="teacher-management">
      <form className="teacher-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Teacher's Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          name="aadhaar"
          placeholder="Aadhaar Number"
          value={formData.aadhaar}
          onChange={(e) =>
            setFormData({ ...formData, aadhaar: e.target.value })
          }
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject Specialization"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="number"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        >
          <option value="" disabled>
            Teacher/Other Staff
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Staff">Staff</option>
        </select>

        <input
          type="number"
          placeholder="Due Amount"
          value={formData.due}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: { ...formData.amount, due: e.target.value },
            })
          }
          required
        />
        <input
          type="number"
          name="amount.paid"
          placeholder="Paid Amount"
          value={formData.paid}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: { ...formData.amount, paid: e.target.value },
            })
          }
          required
        />
        <button type="submit" className="btn-primary">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default TeacherForm;
