import { useState } from 'react'
import TasksPage from './pages/TaskPage'
import TaskFormPage from './pages/taskFormPage'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {




  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path='/tasks' element={<TasksPage />} />

        <Route path='/tasks-create' element={<TaskFormPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
