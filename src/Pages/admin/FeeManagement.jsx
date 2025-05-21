  import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FeeManagement.css";
import PaidFee from "./Student/PaidFee";
import { AuthStore } from "../../store/AuthStore";

const FeeManagement = () => {
  const { students, isLoading, addFee, Class, transportFee } = useContext(AuthStore);
  const [isShowForm, setIsShowForm] = useState(false);
  const [idx, setIdx] = useState(0);
  const [formData, setFormData] = useState({
    Class: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Class, amount } = formData;
    if (!Class || !amount) {
      toast.error("Please fill all fields!");
      return;
    }
    addFee(formData);
    setFormData({ Class: "", amount: "" });
  };

  return (
    <>
      {isLoading ? (
        <div> ..Loading </div>
      ) : (
        <div className="fee-management">
          <h1>Student Fee Management</h1>
          {isShowForm ? (
            <div>
              {" "}
              <PaidFee
                onCancel={() => setIsShowForm(false)}
                student={students[idx]}
              />{" "}
            </div>
          ) : (
            <>
              
            <form className="fee-form" onSubmit={handleSubmit}>
              <select
                name="Class"
                value={formData.Class}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Class
                </option>
                {Class.map((t, ind) => (
                  <option value={t} key={ind}>
                    {t}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Fee Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn-primary">
                Add Fee
              </button>
            </form> 
            <button className="btn-primary" onClick={transportFee}>Add Transport Fee</button>
            </>
          )}

          
          <div className="fee-table">
            <h2>Fee Records</h2>
            {students ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll Number</th>
                    <th>Father Name</th>
                    <th>Amount Due</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((st, ind) => (
                    <tr key={ind}>
                      <td>{st.name}</td>
                      <td>{st.class}</td>
                      <td>{st.rollNo}</td>
                      <td>{st.fatherName}</td>
                      <td>{st.amount.due}</td>
                      <td>
                        <button
                          className="btn-primary"
                          onClick={() => {
                            setIsShowForm(true);
                            setIdx(ind);
                          }}
                        >
                          Pay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No fee records added yet.</p>
            )}
          </div>

          <ToastContainer position="top-center" autoClose={2000} />
        </div>
      )}
    </>
  );
};

export default FeeManagement;
