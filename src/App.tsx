import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import PageNotFound from './pages/PageNotFound.tsx'

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />}></Route>
      <Route path={'login'} element={<LoginPage />}></Route>
      <Route path={'*'} element={<PageNotFound />}></Route>
    </Routes>
  )
}
