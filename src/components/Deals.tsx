import { useState } from 'react'
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

        <Indicator
          currentIndex={currentIndex}
          itemsCount={itemsCount}
          onClick={function (index: number): void {
            console.log(`item ${index} clicked`)
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
        return <div>{index}</div>
      })}
    </div>
  )
}
