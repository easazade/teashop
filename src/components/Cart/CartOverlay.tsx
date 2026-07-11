type CartOverlayProps = {
  isOpen: boolean
  closeOverlay: () => void
}

export default function CartOverlay({ isOpen, closeOverlay }: CartOverlayProps) {
  return (
    <div
      className={`
        z-60 flex flex-row justify-around
        ${isOpen ? 'absolute left-0 right-0 top-0 bottom-0 pointer-events-auto' : 'hidden pointer-events-none'}
      `}
    >
      <div className={'h-full flex-1 bg-white/10 backdrop-blur-xs'} onClick={closeOverlay}></div>
      <div className={'h-full flex-1 bg-background p-4 shadow-lg'}>Cart Sidebar</div>
    </div>
  )
}
