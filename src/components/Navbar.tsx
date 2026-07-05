import { Languages, Menu, Search, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import CartOverlay from './Cart/CartOverlay'
import Logo from './Logo'

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <nav className={'flex flex-row items-center gap-4 w-full bg-background h-20 shadow-xs p-8'}>
      <Menu size={20} cursor={'pointer'} />
      <div className={'md:absolute md:left-1/2 md:-translate-x-1/2'}>
        <Logo sizeType="compact" />
      </div>
      <div className={'flex-1'}></div>
      <Link to={'/login'}>Login</Link>
      <Search size={20} />
      <Languages size={20} />
      <ShoppingBasket size={20} onClick={() => setIsCartOpen(true)} cursor={'pointer'} />
      <CartOverlay isOpen={isCartOpen} closeOverlay={() => setIsCartOpen(false)} />
    </nav>
  )
}
