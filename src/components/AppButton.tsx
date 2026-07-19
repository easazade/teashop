import type { CSSProperties, MouseEventHandler } from 'react'
import { cn } from '../utils/functions'

type AppButtonProps = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  minWidth?: CSSProperties['minWidth']
  inverted?: boolean
}

export default function AppButton({ label, onClick, minWidth = 100, inverted = false }: AppButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      // in below line you see javascript object short hand feature. complete version is {minWidth: minWidth}
      style={{ minWidth }}
      className={cn(
        inverted
          ? 'bg-on-primary text-primary border-on-primary hover:text-on-primary'
          : 'bg-primary text-on-primary border-primary hover:text-primary',
        'cursor-pointer border-3 px-2 py-1.5 text-sm transition-colors hover:bg-transparent'
      )}
    >
      {label.toUpperCase()}
    </button>
  )
}
