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
      className="bg-button text-button-text border-button hover:text-button cursor-pointer border-3 p-2 text-sm
        transition-colors hover:bg-transparent"
    >
      {label.toUpperCase()}
    </button>
  )
}
