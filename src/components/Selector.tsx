import type { ComponentPropsWithoutRef } from 'react'

type SelectorProps = ComponentPropsWithoutRef<'select'> & {
  selectedIndex: number
  options: Array<any>
  getName: (index: number) => string
}

export function Selector({ selectedIndex, options, getName, ...props }: SelectorProps) {
  console.log(`selected index is : ${selectedIndex}`)
  return (
    <select {...props} value={options[selectedIndex]}>
      {options.map((_, index) => {
        return <option value={index}>{getName(index)}</option>
      })}
    </select>
  )
}
