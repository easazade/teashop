import { useId, type ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/functions'

type SelectorProps = ComponentPropsWithoutRef<'select'> & {
  selectedIndex?: number
  placeholder: string
  options: Array<any>
  getName: (index: number) => string
  minWidth?: number
}

export function Selector({
  selectedIndex,
  options,
  placeholder,
  id,
  getName,
  minWidth,
  className,
  ...props
}: SelectorProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="relative" style={{ minWidth }}>
      <select
        {...props}
        id={inputId}
        value={selectedIndex ?? ''}
        className={cn(
          'w-full border px-2 py-2.5 text-sm transition-colors outline-none',
          'focus:border-primary border-gray-300',
          selectedIndex === undefined ? 'text-gray-text' : 'text-text',
          className
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((_, index) => {
          return (
            <option key={index} value={index}>
              {getName(index)}
            </option>
          )
        })}
      </select>

      {placeholder && selectedIndex !== undefined && (
        <label
          htmlFor={inputId}
          className={cn(
            'bg-background text-gray-text pointer-events-none absolute inset-s-3 top-0 -translate-y-1/2 px-1 text-xs'
          )}
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}
