import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import VerifyOtp from './pages/VerifyOtp'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
