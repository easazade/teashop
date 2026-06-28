import { Languages, Menu, Search, ShoppingBasket } from 'lucide-react'
import Logo from './Logo'

export function Navbar() {
  return (
    <nav className={'flex flex-row items-center gap-4 w-full bg-background h-16 shadow-xs p-8'}>
      <Menu size={20} />
      <div className={'md:absolute md:left-1/2 md:-translate-x-1/2'}>
        <Logo />
      </div>
      <div className={'flex-1'}></div>
      <span>Login</span>
      <Search size={20} />
      <Languages size={20} />
      <ShoppingBasket size={20} />
    </nav>
  )
}
