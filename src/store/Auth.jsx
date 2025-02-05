import {React, createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AuthProvider = createContext();

const Auth = ({children}) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    let token = undefined;
    useEffect(()=>{
      const fetchToken = async() => {
        const response = await axios.get(`${backendUrl}/getToken`, { withCredentials: true })
        if(response.data.success){
          token = response.data.token;
          setIsLoading(false);
        }
      }
      fetchToken();
    },[refresh])


    const handleLogout = async() => {
      try{
        const response = await axios.get(`${backendUrl}/user/logout`,
           {withCredentials:true});
        if(response.data.success)
          navigate('/' || '/login')
      }catch(err) {console.error(err.message)}
    }

    const handleLogin = async(user) => {
      
      try{
        setIsLoading(true);
            const response = await axios.post(`${backendUrl}/user/login`, user,
              {
                withCredentials: true ,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
              }
            );

            if(response.data.success) {
              toast.success("Logined SucessFully")
              navigate('/admin');
            }
        }catch (err) {toast.error("Invalid Details") }  
        setIsLoading(false); 
    }

  return (
    <AuthProvider.Provider value={{token, handleLogin, isLoading, handleLogout}}>
        {children}
    </AuthProvider.Provider>
  )
}

export {Auth, AuthProvider};