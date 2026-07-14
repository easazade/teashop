import clsx from 'clsx'
import { useState } from 'react'
import { VerticalGap } from './Gap'
import ShopItem from './ShopItem'

export default function Deals() {
  const itemsCount = 4
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsImage = 'https://teashop.com/cdn/shop/files/minitines_2.png?v=1782824733&width=1254'

  return (
    <div className="flex h-168 w-full flex-row items-center gap-8 overflow-hidden">
      <div className="flex-1 basis-0">
        <img src={itemsImage} className="object-cover" />
      </div>
      <div className="flex flex-1 basis-0 flex-col items-center">
        <h3 className="mb-0">Buy 5 Mini Tea Tins, pay for 4! New flavours</h3>
        <div className="mb-8 text-sm">Choose from irresistible flavours and create your perfect selection</div>

        <ShopItem />
        <VerticalGap vertical={24} />

        <Indicator
          currentIndex={currentIndex}
          itemsCount={itemsCount}
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
            className={clsx(
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
