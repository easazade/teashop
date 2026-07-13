type CartOverlayProps = {
  isOpen: boolean
  closeOverlay: () => void
}

export default function CartOverlay({ isOpen, closeOverlay }: CartOverlayProps) {
  return (
    <div
      className={`z-60 flex flex-row justify-around
        ${isOpen ? 'pointer-events-auto absolute top-0 right-0 bottom-0 left-0' : 'pointer-events-none hidden'} `}
    >
      <div className={'h-full flex-1 bg-white/10 backdrop-blur-xs'} onClick={closeOverlay}></div>
      <div className={'bg-surface h-full flex-1 p-4 shadow-lg'}>Cart Sidebar</div>
    </div>
  )
}
