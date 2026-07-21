import type { ComponentPropsWithoutRef } from 'react'

type SelectorProps = ComponentPropsWithoutRef<'select'> & {
  selectedIndex: number
  options: Array<any>
  getName: (index: number) => string
}

export function Selector({ selectedIndex, options, getName, ...props }: SelectorProps) {
  return (
    <select {...props} value={selectedIndex}>
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
