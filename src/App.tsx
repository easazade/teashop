import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutPage } from './pages/AboutPage.tsx'
import HomePage from './pages/HomePage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />}></Route>
      <Route path={'about'} element={<AboutPage />}></Route>
    </Routes>
  )
}
