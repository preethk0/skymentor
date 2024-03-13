import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddInstructor from './pages/AddInstructor'
import EditInstructor from './pages/EditInstructor'
import DeleteInstructor from './pages/DeleteInstructor'
import ShowInstructor from './pages/ShowInstructor'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/instructors/add' element={<AddInstructor />} />
      <Route path='/instructors/edit/:id' element={<EditInstructor />} />
      <Route path='/instructors/delete/:id' element={<DeleteInstructor />} />
      <Route path='/instructors/details/:id' element={<ShowInstructor />} />
    </Routes>
  )
}

export default App