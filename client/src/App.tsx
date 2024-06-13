import React from 'react'
import Maneger from './components/Bai7/Maneger'
import { Route, Routes } from 'react-router-dom'
import DeleteStudent from './components/Bai8/DeleteStudent'
import CreateStudent from './components/Bai9/CreateStudent'
import UpdateStudent from './components/Bai10/UpdateStudent'

export default function App() {
  return (
    <div>
      <Maneger></Maneger>
      <Routes>
        <Route path='/delete' Component={DeleteStudent}></Route>
        <Route path='/create' Component={CreateStudent}></Route>
        <Route path='/update' Component={UpdateStudent}></Route>
      </Routes>
    </div>
  )
}
