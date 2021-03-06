// Components
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Profiles from './pages/Profiles/Profiles'
import ClassicList from './pages/ClassicList/ClassicList'
import ClassicDetails from './pages/ClassicDetails/ClassicDetails'
import ClassicForm from './Forms/ClassicForm'
import Confirmation from './pages/Confirmation/Confirmation'

//Services
import * as authService from './services/authService'
import * as classicsService from './services/classics'
import { SliderData } from './components/Slider/SliderData'

const App = () => {
  const navigate = useNavigate()
  const [classics, setClassics] = useState([])
  const [user, setUser] = useState(authService.getUser())
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const updateClassic = async (classicData) => {
    const updatedClassic = await classicsService.update(classicData)
    setClassics(classics.map(classic => (
      classic.id === updatedClassic.id ? updatedClassic : classic
    )))
  }

  const addClassic = async (classicData) => {
    const newClassic = await classicsService.create(classicData)
    setClassics([...classics, newClassic])
  }

  const deleteClassic = async (id) => {
    await classicsService.deleteOne(id)
    setClassics(classics.filter(classic => classic.id !== parseInt(id)))
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await classicsService.getAll()
      setClassics(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} classics={classics} slides={SliderData} />} />
        <Route
          path="/classics"
          element={<ClassicList classics={classics} />}
        />
        <Route
          path="/classics/:id"
          element={<ClassicDetails user={user} />}
        />
        <Route
          path="/classics/:id/edit"
          element={<ClassicForm updateClassic={updateClassic} user={user} />}
        />
        <Route
          path="/classics/new"
          element={<ClassicForm addClassic={addClassic} user={user} />}
        />
        <Route path="/classics/:id/confirmation" element={
          <Confirmation deleteClassic={deleteClassic} user={user} />

        } />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
