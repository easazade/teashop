import ShopItem from './ShopItem'

export default function Deals() {
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
      </div>
    </div>
  )
}
