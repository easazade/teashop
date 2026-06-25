import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />}></Route>
      <Route path={'login'} element={<LoginPage />}></Route>
    </Routes>
  )
}
