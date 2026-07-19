import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/AuthPage.tsx'
import LoginPage from './pages/auth/LoginPage.tsx'
import SignUpPage from './pages/auth/SignUpPage.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import StoresPage from './pages/StoresPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />}></Route>
      <Route path={'auth'} element={<AuthPage />}></Route>
      <Route path={'login'} element={<LoginPage />}></Route>
      <Route path={'signup'} element={<SignUpPage />}></Route>
      <Route path={'stores'} element={<StoresPage />}></Route>
      <Route path={'*'} element={<PageNotFound />}></Route>
    </Routes>
  )
}
