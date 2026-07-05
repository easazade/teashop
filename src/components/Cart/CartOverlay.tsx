type CartOverlayProps = {
  isOpen: boolean
  closeOverlay: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CartOverlay({ isOpen, closeOverlay }: CartOverlayProps) {
  return <div className={`z-50 bg-amber-200 ${isOpen ? 'absolute left-0 right-0 top-0 bottom-0' : 'hidden'}`}></div>
}
