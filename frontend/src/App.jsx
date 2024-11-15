import TasksPage from './pages/TaskPage'
import TaskFormPage from './pages/taskFormPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TaskFormPage />} />
        <Route path='/tasks/:id' element={<TaskFormPage />} />
      </Routes>
    <Toaster/>
    </BrowserRouter>
  )
}

export default App
