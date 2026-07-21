import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/functions'

type AppInputProps = ComponentPropsWithoutRef<'input'> & {
  error?: string
}

export function AppInput({ error, className, ...inputProps }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <input
        {...inputProps}
        className={cn(
          'border px-3 py-2 text-sm transition-colors outline-none placeholder:text-gray-400',
          error ? 'border-error-600 focus:border-er' : 'focus:border-primary border-gray-300',
          className
        )}
      />
      {error && <span className="text-error-600 text-xs">{error}</span>}
    </div>
  )
}

export default AppInput
