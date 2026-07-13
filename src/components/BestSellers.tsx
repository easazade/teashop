import { useState } from 'react'
import AppButton from './AppButton'

export default function BestSellers() {
  const tabNames = ['TEAS', 'INFUSIONS', 'ROOIBOS', 'MATCHA TEA', 'PACKS']
  const [selectedTabIndex, selectTabIndex] = useState(0)

  return (
    <div className="m-14 flex flex-col items-center gap-6">
      <h3 className="">Best Sellers. Haven't Tried them yet?</h3>
      <ul className="flex flex-row gap-6 text-sm" role="tablist">
        {tabNames.map((name, index) => {
          const selected = selectedTabIndex === index
          return (
            <li key={name} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                className="grid cursor-pointer place-items-center underline-offset-6 transition-all"
                onClick={() => selectTabIndex(index)}
              >
                {/* trick to make each tab to have at least the width that it has when it is bold */}
                <span className="invisible col-start-1 row-start-1 font-bold transition-all" aria-hidden="true">
                  {name}
                </span>
                <span className={`col-start-1 row-start-1 transition-all ${selected ? 'font-bold underline' : ''}`}>
                  {name}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="flex-1">Items</div>
      <AppButton label="SEE MORE" onClick={() => {}} />
    </div>
  )
}
