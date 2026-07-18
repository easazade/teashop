import { useEffect } from 'react'
import { cn } from '../../utils/functions'

type CartOverlayProps = {
  isOpen: boolean
  closeOverlay: () => void
}

export default function CartOverlay({ isOpen, closeOverlay }: CartOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        'z-60 flex flex-row justify-around overflow-y-auto',
        isOpen ? 'pointer-events-auto fixed top-0 right-0 bottom-0 left-0' : 'pointer-events-none hidden'
      )}
    >
      <div className={'h-full flex-1 bg-white/10 backdrop-blur-xs'} onClick={closeOverlay}></div>
      <div className={'bg-surface h-full flex-1 p-4 shadow-lg'}>Cart Sidebar</div>
    </div>
  )
}
