import { useState } from "react";

function EditTeacherForm({ teacher, onSave, onCancel }) {
    const [formData, setFormData] = useState(teacher);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData.aadhaar, formData);
    };
  
    return (
      <form className="teacher-form" onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="aadhaar" value={formData.aadhaar} onChange={handleChange} placeholder="Aadhaar" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" />
        <input name="paid" value={formData.amount.paid}
            onChange={(e)=> setFormData({...formData, amount:{...formData.amount, paid:e.target.value }})} placeholder="Paid Amount" />
        <input name="due" value={formData.amount.due}
            onChange={(e)=> setFormData({...formData, amount:{...formData.amount, due:e.target.value }})} placeholder="Due Amount" />
        <button type="submit" className="btn-primary">Save</button>
        <button type="button" onClick={onCancel} className="btn-secondary">Cancel</button>
      </form>
    );
  }

  export default EditTeacherForm