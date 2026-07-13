export default function Deals() {
  const itemsImage = 'https://teashop.com/cdn/shop/files/minitines_2.png?v=1782824733&width=1254'

  return (
    <div className="flex h-172 w-full flex-row items-center gap-8 overflow-hidden">
      <div className="flex h-full min-w-0 flex-1 basis-0 items-center justify-center">
        <img src={itemsImage} alt="Mini tea tins" className="max-h-full w-full object-cover" />
      </div>
      <div className="flex h-full min-w-0 flex-1 basis-0 items-center justify-center"></div>
    </div>
  )
}
