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
import { useContext } from 'react'
import ProtectedRoute from './Pages/admin/ProtectedRoute'
import { AuthProvider } from './store/Auth'

function App() {
  const {user} = useContext(AuthProvider);

  return (
    <>
    <Navbar/>
    {/* {isLoading ? <Loader/> :  */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/admission' element={<Admission/>} />
      <Route path='/quiz' element={<Quiz/>} />  
      <Route path='/login' element={<Login/>} />

      <Route path='/admin' element={<ProtectedRoute> <Admin/> </ProtectedRoute>} /> 
      <Route path='/admin/student' element={<ProtectedRoute> <Student/> </ProtectedRoute>} />
      <Route path='/admin/staff' element={<ProtectedRoute> <Teacher/></ProtectedRoute>} />
    <Route path='admin/fee' element={<ProtectedRoute> <FeeManagement /></ProtectedRoute>}/>
      
    </Routes>
    {/* } */}
    <ToastContainer position="top-center"/>
    </>
  )
}

export default App
