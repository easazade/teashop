import { type ComponentPropsWithoutRef, type ReactNode, useId } from 'react'
import { cn } from '../utils/functions'

type AppInputProps = ComponentPropsWithoutRef<'input'> & {
  error?: string
  minWidth?: number
  children?: ReactNode
}

export function Input({ error, children, minWidth, className, value, id, placeholder, ...inputProps }: AppInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative">
        <input
          {...inputProps}
          id={inputId}
          value={value}
          placeholder={placeholder}
          style={{ minWidth }}
          className={cn(
            'peer placeholder:text-gray-text border px-3 py-2.5 text-sm transition-colors outline-none',
            error ? 'border-error focus:border-error' : 'focus:border-primary border-gray-300',
            className
          )}
        />
        {placeholder && (
          <label
            htmlFor={inputId}
            className={cn(
              `bg-background pointer-events-none absolute inset-s-3 top-0 -translate-y-1/2 px-1 text-xs opacity-100
              transition-opacity peer-placeholder-shown:opacity-0`,
              error ? 'text-error' : 'text-gray-text'
            )}
          >
            {placeholder}
          </label>
        )}
        {!value && <div className="absolute inset-e-3 top-1/2 -translate-y-1/2 leading-0">{children}</div>}
      </div>
      {error && <span className="text-error text-xs">{error}</span>}
    </div>
  )
}

export default Input
