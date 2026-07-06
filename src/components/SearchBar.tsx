import { Search } from 'lucide-react'
import React, { useState, type ReactElement } from 'react'

export function SearchBar(): ReactElement {
  const [text, setText] = useState('')

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    let processed = event.target.value
    if (processed.startsWith('+')) {
      processed = processed.substring(1)
    }

    setText(processed)
  }

  return (
    <div
      className={'flex items-center gap-2 border-b border-gray-300 pb-1 transition-colors focus-within:border-gray-900'}
    >
      <input
        value={text}
        onChange={handleInput}
        placeholder="Search"
        aria-label="Search"
        className={`w-32 bg-transparent text-sm outline-none border-0 p-0
         placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-0 md:w-44`}
      />
      <Search size={20} className={'cursor-pointer transition-colors hover:text-gray-900'} />
    </div>
  )
}
