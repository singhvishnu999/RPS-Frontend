import {React, createContext, useState, useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import process

const AuthStore = createContext();

const StudentProvider = ({children}) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(null);
    const [students, setStudents] = useState([{ }]);
    const [refresh, setRefresh] = useState(true)
    const [isLoading, setIsLoading] = useState(true);

    const transport = ["NO", "MORESARAI", "KUMAHU", "BEDAMODE", "MORWA", "JANJARA", "DORIYAW", "SASARAM"]
    const Class = ["PREP", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const navigate  = useNavigate();

    useEffect(() => {
      const fetch = async() => {
         const response = await axios.get(`${backendUrl}/students/fetch`);
          if(response.data.success){
            setStudents(response.data.students)
            setIsLoading(false);
          }}
          fetch();
}, [refresh]);

      const addStudent = async(newStudent) => {
        setIsLoading(true)
        const res = await axios.post(`${backendUrl}/students/add`, newStudent)
        if(res.data.success){
          toast.success("Student Added!")
          setStudents([...students, res.data])
        }else{
          toast.error("Failed to add student. Please try again.")
        }
        setRefresh(!refresh)
        setIsLoading(false)
      };

      const deleteStudent = async(id, stClass) => {
        setIsLoading(true)
        const response  = await axios.delete(`${backendUrl}/students/delete/${id}`, {data:{stClass:stClass}});
        if(response.data.success){
          toast.error("deleted SuccessFully")
        }
        else toast.error("not deleted")
        setRefresh(!refresh)
        setIsLoading(false)
      }

      const updateStudent = async (id, newStudent) => {
        try {
          setIsLoading(true)
          const response = await axios.put(`${backendUrl}/students/update/${id}`, newStudent);
          if(response.data.success){
            toast.success('Student updated successfully!');
          }
          else toast.error("not updated")
        } catch (err) {
          if (err.response) {
            toast.error('Server error:', err.response.data.message);
          } else {
            toast.error('Network error:', err.message);
          }
          toast.error('Failed to update student. Please try again.');
        }
        setRefresh(!refresh)
        setIsLoading(false)
      };

      // Fee Management
      const addFee = async(feeAmount) => {
        try{
          setIsLoading(true)
          const response = await axios.put(`${backendUrl}/students/addFee`, feeAmount);
          if(response.data.success) {
            toast.success('updated...!')
          }
          else toast.error("not Updated")
        }catch(err){ toast.error(err.message)}
          setIsLoading(false)
          setRefresh(!refresh);
      }

      const transportFee = async() => {
        alert("are you sure want to add Transport Fee")
        setIsLoading(true);
        try{
          const res = await axios.put(`${backendUrl}/students/transportFee`)
          if(res.data.success) toast.success("Transport Fee Added")
          else toast.error("Transport Fee not Added")
        }catch(err){toast.error("Transport Fee not Added")}
        setIsLoading(false);
        setRefresh(!refresh)
      }
      
      const feePaid = async(amount) => {
        try{
          setIsLoading(true)
          const response = await axios.put(`${backendUrl}/students/feePaid`, amount);
          if(response.data.success) {
            setIsLoading(false)
            toast.success("Fee Paid!")
          }
          else toast.error("Payment Not Done!");
        }catch(err){toast.error("Reload Page")};
        setIsLoading(false)
        setRefresh(!refresh)
      }
      
      return (
        <AuthStore.Provider value=  {{students,setIsLoading, isLoading, token, setStudents, 
          addStudent, deleteStudent, updateStudent, addFee, feePaid, transport, transportFee, Class}}> 
        {children}
    </AuthStore.Provider>
  )
}

export {AuthStore, StudentProvider};