import { Languages, Menu, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { PATHS } from '../routes'
import CartOverlay from './Cart/CartOverlay'
import Logo from './Logo'
import { SearchBar } from './SearchBar'

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isAuthPath = pathname === PATHS.login || pathname === PATHS.auth

  return (
    <>
      <CartOverlay isOpen={isCartOpen} closeOverlay={() => setIsCartOpen(false)} />
      <nav className={'bg-surface sticky top-0 z-50 flex h-20 w-full flex-row items-center gap-4 p-8 shadow-xs'}>
        <Menu size={20} cursor={'pointer'} />
        <SearchBar />
        <div className={'cursor-pointer md:absolute md:left-1/2 md:-translate-x-1/2'} onClick={() => navigate('/')}>
          <Logo sizeType="compact" />
        </div>
        <div className={'flex-1'}></div>
        {!isAuthPath && <Link to={PATHS.auth}>Login</Link>}
        <Languages size={20} />
        <ShoppingBasket size={20} onClick={() => setIsCartOpen(true)} cursor={'pointer'} />
      </nav>
    </>
  )
}
