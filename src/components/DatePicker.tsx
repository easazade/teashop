import { type ComponentPropsWithoutRef, useId } from 'react'
import { cn } from '../utils/functions'

// export function DatePicker() {
//   const [birthday, setBirthday] = useState('1994-02-22')

//   return (
//     <input
//       type="date"
//       value={birthday}
//       onChange={(e) => setBirthday(e.target.value)}
//       className="border-gray-text w-full border px-6 py-6 text-2xl outline-none"
//     />
//   )
// }

type DateInputProps = ComponentPropsWithoutRef<'input'> & {
  minWidth?: number
}

export default function DatePicker({ minWidth, className, id, placeholder, ...inputProps }: DateInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative">
        <input
          {...inputProps}
          type="date"
          id={inputId}
          style={{ minWidth }}
          className={cn(
            `peer placeholder:text-gray-text focus:border-primary border border-gray-300 px-3 py-2.5 text-sm
            transition-colors outline-none`,
            className
          )}
        />
        {placeholder && (
          <label
            htmlFor={inputId}
            className={cn(
              `bg-background text-gray-text pointer-events-none absolute inset-s-3 top-0 -translate-y-1/2 px-1 text-xs
              opacity-100 transition-opacity peer-placeholder-shown:opacity-0`
            )}
          >
            {placeholder}
          </label>
        )}
      </div>
    </div>
  )
}
