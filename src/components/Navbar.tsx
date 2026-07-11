import { Languages, Menu, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import CartOverlay from './Cart/CartOverlay'
import Logo from './Logo'
import { SearchBar } from './SearchBar'

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className={'sticky top-0 z-50 flex flex-row items-center gap-4 w-full bg-background h-20 shadow-xs p-8'}>
      <Menu size={20} cursor={'pointer'} />
      <SearchBar />
      <div className={'md:absolute md:left-1/2 md:-translate-x-1/2 cursor-pointer'} onClick={() => navigate('/')}>
        <Logo sizeType="compact" />
      </div>
      <div className={'flex-1'}></div>
      <Link to={'/login'}>Login</Link>
      <Languages size={20} />
      <ShoppingBasket size={20} onClick={() => setIsCartOpen(true)} cursor={'pointer'} />
      <CartOverlay isOpen={isCartOpen} closeOverlay={() => setIsCartOpen(false)} />
    </nav>
  )
}
