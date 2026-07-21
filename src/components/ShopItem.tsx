import Button from './Button'
import Rating from './Rating'

export default function ShopItem() {
  return (
    <div className="bg-surface relative flex h-auto min-w-80 flex-col items-center px-4 pt-2 pb-4">
      <img
        src="https://teashop.com/cdn/shop/files/10156_ChaiLatte_1000x1000_l.jpg?v=1772541329&width=1000"
        className="max-w-84"
      />
      <Button
        label={'Add to cart'}
        onClick={() => {
          console.log('clicked on shop-item')
        }}
      />
      <h4 className="mt-3 font-medium">Chai Latte Black Tea</h4>
      <span className="mb-3 text-sm font-bold text-black">€9,99</span>
      <Rating />
      <span className="bg-badge absolute top-2.5 left-2.5 px-3 py-1.5 text-sm">Badge</span>
    </div>
  )
}
