import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ExploreCollections() {
  const collections = [
    'https://images.pexels.com/photos/31474385/pexels-photo-31474385.jpeg',
    'https://images.pexels.com/photos/6694154/pexels-photo-6694154.jpeg',
    'https://images.pexels.com/photos/25440509/pexels-photo-25440509.jpeg',
  ]

  if (collections.length < 3) {
    return null
  }

  return (
    <>
      <h3 className={'pt-12 pb-6'}>Explore our Collections</h3>

      <div className={'relative flex h-140 w-full gap-4 overflow-hidden'}>
        <ArrowButton direction="left" onTap={() => {}} />
        <ArrowButton direction="right" onTap={() => {}} />
        {collections.map((imageUrl) => {
          return (
            <div key={imageUrl} className={'h-full flex-1 cursor-pointer'}>
              <img src={imageUrl} className={'h-full w-full object-cover'} />
            </div>
          )
        })}
      </div>
    </>
  )
}

type ArrowButtonProps = {
  direction: 'left' | 'right'
  onTap: () => void
}

function ArrowButton({ direction, onTap }: ArrowButtonProps) {
  return (
    <div
      className={`bg-background/70 hover:bg-background absolute top-1/2 m-2 flex h-12 w-12 -translate-y-1/2
        cursor-pointer items-center justify-center rounded-4xl shadow-2xl shadow-gray-300 transition-colors duration-100
        ${direction === 'left' ? 'left-0' : 'right-0'} `}
      onClick={() => onTap()}
    >
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </div>
  )
}
