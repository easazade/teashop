import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '../utils/functions'

type AppInputProps = ComponentPropsWithoutRef<'input'> & {
  error?: string
  minWidth?: number
  children?: ReactNode
}

export function AppInput({ error, children, minWidth, className, value, ...inputProps }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative">
        <input
          {...inputProps}
          value={value}
          style={{ minWidth }}
          className={cn(
            'placeholder:text-gray-text border px-3 py-2.5 text-sm transition-colors outline-none',
            error ? 'border-error focus:border-error' : 'focus:border-primary border-gray-300',
            className
          )}
        />
        {!value && <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer leading-0">{children}</div>}
      </div>
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  )
}

export default AppInput
