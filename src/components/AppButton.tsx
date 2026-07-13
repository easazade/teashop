import type { CSSProperties, MouseEventHandler } from 'react'

type AppButtonProps = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  minWidth?: CSSProperties['minWidth']
}

export default function AppButton({ label, onClick, minWidth = 100 }: AppButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      // in below line you see javascript object short hand feature. complete version is {minWidth: minWidth}
      style={{ minWidth }}
      className="bg-button text-button-text text-sm p-2 border-3 border-button transition-colors cursor-pointer hover:bg-transparent hover:text-button"
    >
      {label.toUpperCase()}
    </button>
  )
}
