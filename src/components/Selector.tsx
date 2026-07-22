import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/functions'

type SelectorProps = ComponentPropsWithoutRef<'select'> & {
  selectedIndex: number
  options: Array<any>
  getName: (index: number) => string
  minWidth?: number
}

export function Selector({ selectedIndex, options, getName, minWidth, ...props }: SelectorProps) {
  return (
    <select
      {...props}
      value={selectedIndex}
      style={{ minWidth }}
      className={cn(
        'border px-2 py-2.5 text-sm transition-colors outline-none',
        'focus:border-primary border-gray-300'
      )}
    >
      {options.map((_, index) => {
        return (
          <option key={index} value={index}>
            {getName(index)}
          </option>
        )
      })}
    </select>
  )
}
