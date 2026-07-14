import { useState } from 'react'
import { cn } from '../utils/functions'
import { VerticalGap } from './Gap'
import ShopItem from './ShopItem'

type TinCan = {
  index: number
  offsetPercentage: { x: number; y: number }
}

export default function Deals() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const tinCans = [
    { index: 0, offsetPercentage: { x: 49, y: 38 } },
    { index: 1, offsetPercentage: { x: 74, y: 43 } },
    { index: 2, offsetPercentage: { x: 28, y: 61 } },
    { index: 3, offsetPercentage: { x: 47, y: 66 } },
    { index: 3, offsetPercentage: { x: 74, y: 71 } },
  ]

  const itemsImage = 'https://teashop.com/cdn/shop/files/minitines_2.png?v=1782824733&width=1254'

  return (
    <div className="flex h-168 w-full flex-row items-center gap-8 overflow-hidden">
      <div className="relative flex-1 basis-0">
        <img src={itemsImage} className="w-full object-cover" />
        {tinCans.map((item) => {
          return (
            <button
              type="button"
              onClick={() => setCurrentIndex(item.index)}
              className={cn(
                `bg-surface shadow-surface text-primary absolute size-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer
                rounded-full shadow-xl`
              )}
              style={{
                left: `${item.offsetPercentage.x}%`,
                top: `${item.offsetPercentage.y}%`,
              }}
            >
              +
            </button>
          )
        })}
      </div>
      <div className="flex flex-1 basis-0 flex-col items-center">
        <h3 className="mb-0">Buy 5 Mini Tea Tins, pay for 4! New flavours</h3>
        <div className="mb-8 text-sm">Choose from irresistible flavours and create your perfect selection</div>

        <ShopItem />
        <VerticalGap vertical={24} />

        <Indicator
          currentIndex={currentIndex}
          itemsCount={tinCans.length}
          onClick={function (index: number): void {
            setCurrentIndex(index)
          }}
        />
      </div>
    </div>
  )
}

type IndicatorProps = {
  currentIndex: number
  itemsCount: number
  onClick: (index: number) => void
}

function Indicator({ currentIndex, itemsCount, onClick }: IndicatorProps) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from({ length: itemsCount }, (_, index) => {
        const isActive = currentIndex === index

        return (
          <div
            className={cn(
              'border-primary h-2.5 w-2.5 cursor-pointer rounded-2xl border-2',
              isActive ? 'bg-primary' : 'bg-transparent'
            )}
            onClick={() => onClick(index)}
          ></div>
        )
      })}
    </div>
  )
}
