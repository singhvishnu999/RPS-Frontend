import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Admission from './Pages/Admission'
import Navbar from './Components/Navbar'
import Quiz from './Pages/Quiz'
import Admin from './Pages/admin/Admin'
import Student from './Pages/admin/Student/Student'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Login from './Components/Login'
import FeeManagement from './Pages/admin/FeeManagement'
import Teacher from './Pages/admin/Teacher/Teacher '
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
const [isAuthenticate, setIsAuthenticate] = useState(false)

  useEffect(()=>{
    const fetchToken = async() => {
      const response = await axios.get(`${backendUrl}/getToken`, { withCredentials: true })
      if(response.data.success){
        setIsAuthenticate(true);
        // setIsLoading(false);
      }
    }
    fetchToken();
  },[])

  return (
    <>
    <Navbar isAuthenticate={isAuthenticate}/>
    {/* {isLoading ? <Loader/> :  */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/admission' element={<Admission/>} />
      <Route path='/quiz' element={<Quiz/>} />  
      <Route path='/login' element={<Login/>} />

      <Route path='/admin' element={isAuthenticate ? <Admin/> : <Login/>}> 
          <Route path='student' element={isAuthenticate && <Student/>} />
          <Route path='staff' element={isAuthenticate && <Teacher/>} />
      </Route>
    <Route path='admin/fee' element={isAuthenticate && <FeeManagement />}/>
      
    </Routes>
    {/* } */}
    <ToastContainer position="top-center"/>
    </>
  )
}

export default App
