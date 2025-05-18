import {React, createContext, useEffect, useState} from 'react'
import axios from 'axios';
import { toast } from "react-toastify";

const AuthTeacher = createContext();

const TeacherProvider = ({children}) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [teachers, setTeachers] = useState([])
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    axios.get(`${backendUrl}/teacher/`)
    .then((response)=>{
      setTeachers(response.data.teachers)
      setIsLoading(false)})
    .catch(err=>console.log(err));
   
  },[refresh])

  const addTeacher = async(teacher) => {
    try{
      const response = await axios.post(`${backendUrl}/teacher/`, teacher);
      if(response.data.success){
        toast.success("Teacher Added Successfully!");
        setRefresh(!refresh)
    }else{
      toast.error("not added...") }
     }catch(err){
      toast.error("user already exist")
    }
  }

  const deleteTeacher = async(aadharId) => {
    const response = await axios.delete(`${backendUrl}/teacher/${aadharId}`)
    if(response.data){
      toast.success("Teacher Deleted!")
    }else{
      toast.error("not deleted...")
    }
    setRefresh(!refresh)
  }
  
  const updateTeacher = async (aadharId, teacher) => {
    const response = await axios.put(`${backendUrl}/teacher/${aadharId}`, teacher);
    if(response.data.success){
      toast.success("updated teacher data");
    }else{
      toast.error("not Updated");
    }
    setRefresh(!refresh)
  }

  return (

    <div>
      <AuthTeacher.Provider value = {{teachers, isLoading, addTeacher, deleteTeacher, updateTeacher}} >
        {children}
      </AuthTeacher.Provider>
    </div>
  )
}

export {TeacherProvider, AuthTeacher}